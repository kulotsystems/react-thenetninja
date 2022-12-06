import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle]   = useState('');
    const [body, setBody]     = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);
        fetch('http://localhost:3000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(response => {
            console.log(response);
            setIsPending(false);
            navigate('/');
        });
     };

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="blog-title">Title:</label>
                <input
                    type="text"
                    id="blog-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label htmlFor="blog-body">Body:</label>
                <textarea
                    id="blog-body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
                <label htmlFor="blog-author">Author:</label>
                <select
                    id="blog-author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                >
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
};

export default Create;
