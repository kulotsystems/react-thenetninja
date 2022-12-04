import { useState } from 'react';
import BlogList from './BlogList.jsx';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: 'My New Website'  , body: 'lorem ipsum...', author: 'mario' },
        { id: 2, title: 'Welcome Party!'  , body: 'lorem ipsum...', author: 'yoshi' },
        { id: 3, title: 'Web Dev Top Tips', body: 'lorem ipsum...', author: 'mario' }
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
        </div>
    );
};

export default Home;
