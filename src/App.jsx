import Navbar from './Navbar.jsx';
import Home   from './Home.jsx';
import Create from './Create.jsx';
import BlogDetails from './BlogDetails.jsx';
import NotFound from './NotFound.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes.js';



function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path={routes.home} element={<Home />} exact/>
                        <Route path={routes.create} element={<Create />} exact/>
                        <Route path={`${routes.blogs}/:id`} element={<BlogDetails />} exact/>
                        <Route path="*" element={<NotFound />} exact/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
