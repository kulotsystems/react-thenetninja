import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const path = useLocation().pathname;

    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/" className={path === '/' ? 'active' : ''}>Home</Link>
                <Link to="/create" className={path === '/create' ? 'active' : ''}>New Blog</Link>
            </div>
        </nav>
    );
};

export default Navbar;
