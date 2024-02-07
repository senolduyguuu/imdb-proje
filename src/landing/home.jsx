import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../style/home.css";
import MovieList from "./movieList";

const Home = () => {
	const [movie, setMovie] = useState([]);
	const api = "8a27613734db594ba6d6dee13c8de1ce"
	useEffect(() => {
		async function getHome() {
			try {
				const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1'`);
				setMovie(response.data.results)
				console.log(response);
			} catch (error) {
				console.error(error);
			}
		}
		getHome();
	}, [])
	return (
		<>
			<div className="poster">
				<Carousel
					showThumbs={false}
					autoPlay={true}
					transitionTime={3}
					infiniteLoop={true}
					showStatus={false}
				>
					{
						movie.map(movie => (
							<>
								<div className="posterImage" key={movie.id}>
									<img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt={movie.backdrop_path} />
								</div>
								<div className="posterImage__overlay">
									<div className="posterImage__title">{movie ? movie.original_title : ""}</div>
									<div className="posterImage__runtime">
										{movie ? movie.release_date : ""}
										<span className="posterImage__rating">
											{movie ? movie.vote_average : ""}
										</span>
									</div>
									<div className="posterImage__description">{movie ? movie.overview : ""}</div>
								</div>
							</>

						))
					}
				</Carousel>
				<MovieList></MovieList>
			</div>
		</>


	)
}
export default Home