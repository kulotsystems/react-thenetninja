import Home   from './Home.jsx';
import Navbar from './Navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
