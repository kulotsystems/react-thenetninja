import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: 'My New Website'  , body: 'lorem ipsum...', author: 'mario' },
        { id: 2, title: 'Welcome Party!'  , body: 'lorem ipsum...', author: 'yoshi' },
        { id: 3, title: 'Web Dev Top Tips', body: 'lorem ipsum...', author: 'mario' }
    ]);

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h1>{blog.title}</h1>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;
