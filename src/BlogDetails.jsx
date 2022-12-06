import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch.js';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch(`http://localhost:3000/blogs/${id}`);
    const navigate = useNavigate();

    const handleDelete = () => {
        if(confirm("Do you really want to delete this blog?")) {
            fetch(`http://localhost:3000/blogs/${blog.id}`, {
                method: 'DELETE'
            }).then(response => {
                console.log(response);
                navigate('/');
            });
        }
    };

    return (
        <div className="blog-details">
            { error && <div>{error}</div> }
            { isPending && <div>Loading...</div> }
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
};

export default BlogDetails;
