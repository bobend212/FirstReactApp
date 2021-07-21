import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
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
                setError(err.message);
                setIsLoading(false);
                setData(null);
            })
        }, 1000);
    }, []);

    return { data, isLoading, error };
}

export default useFetch; 