import { useState, useEffect } from 'react';
import BlogList from './BlogList.jsx';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: 'My New Website'  , body: 'lorem ipsum...', author: 'mario' },
        { id: 2, title: 'Welcome Party!'  , body: 'lorem ipsum...', author: 'yoshi' },
        { id: 3, title: 'Web Dev Top Tips', body: 'lorem ipsum...', author: 'mario' }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(() => {
        console.log('use effect ran');
        console.log(blogs);
    });


    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </div>
    );
};

export default Home;
