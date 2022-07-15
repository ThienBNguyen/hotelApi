import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';
import { Austin } from './dataSource';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="hotels" element={<List />} />
				<Route path="/hotels/:id" element={<Hotel />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
