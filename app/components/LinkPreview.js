import { useState, useEffect } from 'react';
import MyImageComponent from "@/app/components/MyImageComponent";
import Image from 'next/image';

function LinkPreview({ url, handleTitle, handleDesc  }) {
    const [previewData, setPreviewData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const title = doc.querySelector('title')?.textContent || '';
                const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
                const image = doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';

                setPreviewData({ title, description, image });
                handleTitle(title);
                handleDesc(description);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    if (loading) {
        return <p>Loading...</p>;
    }

    const handleClick = () => {
        window.open(url, '_blank');
    };

    if (!previewData) {
        return (<div onClick={handleClick}  style={{ cursor: 'pointer' }}><Image alt="404"
                      width={1200}
                      height={1200}  src={"/404.jpeg"}/>
        </div>);
    }



    return (
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
            {previewData.image && <MyImageComponent src={previewData.image} alt={"Link Preview"} />
            }
        </div>
    );
}

export default LinkPreview;
