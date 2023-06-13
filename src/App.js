import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import CreateEvents from './pages/CreateEvents';
import AllEvents from './pages/AllEvents';
import MyEvents from './pages/MyEvents';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import AllEventsWithDashboard from './pages/AllEventsWithDashboard';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Signup" element={<Signup />} />
                    <Route path="/Signin" element={<Signin />} />
                    <Route path="/Dashboard/CreateEvent" element={<CreateEvents />} />
                    <Route path="/AllEvents" element={<AllEvents />} />
                    <Route path="/Dashboard/MyEvents" element={<MyEvents />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Dashboard/AllEvents" element={<AllEventsWithDashboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
