import Navbar from './Navbar.jsx';
import Home   from './Home.jsx';
import Create from './Create.jsx';
import BlogDetails from './BlogDetails.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} exact/>
                        <Route path="/create" element={<Create />} exact/>
                        <Route path="/blogs/:id" element={<BlogDetails />} exact/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
