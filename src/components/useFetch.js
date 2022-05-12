import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);
    // const abortFetch = new AbortController(); // use AbortController to stop updating the state when you return to the pages using this custom hook

    // useEffect(() => {
    //     setTimeout(() => { // added just to simulate a real fetch from api
    //         fetch(url, {signal: abortFetch.signal})
    //         .then(response => {
    //             if(!response.ok){
    //                 throw Error("Could not fetch resources from API");
    //             }
    //             return response.json()
    //         })
    //         .then(data => {
    //             setData(data);
    //             setIsPending(false);
    //             setError(null);
    //         })
    //         .catch(err => {
    //             if(err.name === "AbortError"){
    //                 console.log("Fetch aborted");
    //             } else {
    //                 setIsPending(false);
    //                 setError(err.message);
    //             }
    //         })
    //     }, 1000)

    //     return () => { abortFetch.abort() }
        
    // }, [url])

    useEffect(() => {
        fetch(url)
        .then(response => {
            if(!response.ok){
                throw Error("Could not fetch resources from API");
            }
            return response.json()
        })
        .then(data => {
            setData(data);
        })
    }, [url])

    return {data};
}

export default useFetch;