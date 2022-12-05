import { useState, useEffect } from 'react';
import BlogList from './BlogList.jsx';

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    const [name, setName] = useState('mario');

    useEffect(() => {
        fetch('http://localhost:3000/blogs')
            .then(response => {
                return response.json();
            })
                .then((data) => {
                    setBlogs(data);
                });
    }, []);


    return (
        <div className="home">
            { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
        </div>
    );
};

export default Home;
