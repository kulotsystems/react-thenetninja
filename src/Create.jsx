import { useState } from 'react';

const Create = () => {
    const [title, setTitle]   = useState('');
    const [body, setBody]     = useState('');
    const [author, setAuthor] = useState('Mario');

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
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
                <button>Add Blog</button>
            </form>
        </div>
    );
};

export default Create;
