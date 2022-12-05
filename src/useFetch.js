import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if(!response.ok)
                    throw Error('Could not fetch blogs.');
                else
                    return response.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(error => {
                setError(error.message);
                setIsPending(false);
            });
    }, []);

    return { data, isPending, error };
};

export default useFetch;
