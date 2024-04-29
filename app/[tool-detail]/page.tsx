'use client';
export default function ToolDetails(){

    const cachedData = localStorage.getItem('my-cached-data');

    return (
        cachedData ? <div>Data is available</div> : <div>Data is not Available</div>
    )
}
