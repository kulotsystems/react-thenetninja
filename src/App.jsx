import Home   from './Home.jsx';
import Navbar from './Navbar.jsx';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className="content">
                <Home/>
            </div>
        </div>
    );
}

export default App;
