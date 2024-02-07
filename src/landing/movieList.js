import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/card";



const MovieList = () => {
	const [movieList, setMovieList] = useState([])
	const api = "8a27613734db594ba6d6dee13c8de1ce"
	const { type } = useParams()

	useEffect(() => {
		getData()
	}, [])

	useEffect(() => {
		getData()
	}, [type])

	const getData = () => {
		fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${api}&language=en-US`)
			.then(res => res.json())
			.then(data => setMovieList(data.results))
	}
	return (
		<>
			<div className="movie__list">
				<h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
				<div className="list__cards">
					{
						movieList.map(movie => (
							<Card movie={movie} />
						))
					}
				</div>
			</div>
		</>

	)
}
export default MovieList;