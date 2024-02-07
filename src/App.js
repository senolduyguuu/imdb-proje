import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../src/style/app.css";
import HeaderTop from "./components/header";
import Home from "./landing/home";
import MovieList from './landing/movieList';
import MovieListDetail from './landing/movieListDetail';

function App() {
	return (
		<div className="App">
			<Router>
				<HeaderTop></HeaderTop>
				<Routes>
					<Route index element={<Home></Home>}></Route>
					<Route path="movie/:id" element={<MovieListDetail></MovieListDetail>}></Route>
					<Route path="movie/:type" element={<MovieList></MovieList>}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
