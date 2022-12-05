import { useState, useEffect } from 'react';
import BlogList from './BlogList.jsx';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/blogs')
            .then(response => {
                return response.json();
            })
                .then((data) => {
                    setBlogs(data);
                    setIsPending(false);
                });
    }, []);


    return (
        <div className="home">
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
        </div>
    );
};

export default Home;
