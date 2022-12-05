import { useState, useEffect } from 'react';
import BlogList from './BlogList.jsx';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/blogs')
            .then(response => {
                if(!response.ok)
                    throw Error('Could not fetch blogs.');
                else
                    return response.json();
            })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(error => {
                    setError(error.message);
                    setIsPending(false);
                });
    }, []);


    return (
        <div className="home">
            { error && <div>{error}</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
        </div>
    );
};

export default Home;
