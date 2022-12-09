import routes from './routes.js';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href={routes.home}>Home</a>
                <a href={routes.create}>New Blog</a>
            </div>
        </nav>
    );
};

export default Navbar;
