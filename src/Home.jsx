import BlogList from './BlogList.jsx';
import useFetch from './useFetch.js';

const Home = () => {
    const { data, isPending, error } = useFetch('http://localhost:3000/blogs');

    return (
        <div className="home">
            { error && <div>{error}</div> }
            { isPending && <div>Loading...</div> }
            { data && <BlogList blogs={data} title="All Blogs" /> }
        </div>
    );
};

export default Home;
