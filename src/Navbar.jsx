import { Link, useLocation } from 'react-router-dom';
import routes from './routes.js';

const Navbar = () => {
    const path = useLocation().pathname;

    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to={routes.home} className={path === '/' ? 'active' : ''}>Home</Link>
                <Link to={routes.create} className={path === '/create' ? 'active' : ''}>New Blog</Link>
            </div>
        </nav>
    );
};

export default Navbar;
