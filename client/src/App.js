import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import SignIn from './pages/login/SignIn';
import Plans from './pages/plan/Plans';
import FeaturedProperties from './components/featuredProperties/FeaturedProperties';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="hotels" element={<List />} />
				<Route path="plans" element={<Plans />} />
				<Route path="plans/:planId" element={<FeaturedProperties />} />
				<Route path="/hotels/:id" element={<Hotel />} />
				<Route path="/login" element={<Login />} />
				<Route path="/login/password" element={<SignIn />} />
				<Route path="/register" element={<Login />} />
				<Route path="/register/password" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
