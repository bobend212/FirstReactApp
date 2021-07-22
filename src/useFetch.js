import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
         setTimeout(() => {
            fetch(url, { signal: abortController.signal })
            .then(response => {
                if(!response.ok) {
                   throw Error('could not fetch data from json db'); 
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setError(err.message);
                    setIsLoading(false);
                    setData(null);
                }
            })
         }, 0);

            return () => abortController.abort();
    }, [url]);

    return { data, isLoading, error };
}

export default useFetch; 