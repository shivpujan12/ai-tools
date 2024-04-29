import {useState, useEffect, useMemo, useRef} from 'react';
import {Tool} from "@/app/api/get-data/route";

const useCachedFetch = (url:string) => {
    const cache = useRef<any>({}); // Use useRef for a persistent cache across renders
    const [data, setData] = useState<Tool[]>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try{
                if (cache.current[url]) {
                    // Use cached data if available
                    setData(cache.current[url]);
                    return; // Skip actual fetch if data is in cache
                }
                const data = await fetch(url).then((res) => res.json());
                localStorage.setItem('my-cached-data', JSON.stringify(data));
                setData(data);
            } catch (e) {
                console.log("Error: ",e);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }

        // Check if data exists in local storage first (optional)
        const cachedData = localStorage.getItem('my-cached-data');
        if (cachedData) {
            setData(JSON.parse(cachedData));
        }

        fetchData();
    }, [url]);

    return { data, isLoading, error };
};

export default useCachedFetch;
