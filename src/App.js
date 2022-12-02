import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

import Header from './components/Header'
import MovieScreen from './components/movieScreen/MovieScreen'
import Watchlist from './components/watchlist/Watchlist'

function App() {
	const [movieList, setMovieList] = useState([])
	const [watchList, setWatchList] = useState([])
	const [page, setPage] = useState(1)

	function addMovie(movie) {
		setWatchList([...watchList, movie])
		// setWatchList(prev => [...prev, movie])
	}

	function removeMovie(movie) {
		const newState = watchList.filter((val) => {
			return val !== movie
		})
		setWatchList(newState)
	}

	function getData() {
		axios
			.get(
				`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
			)
			.then((res) => {
				setMovieList(res.data.results)
			})
			.catch((err) => console.log(err))
	}

	useEffect(() => {
		getData()
	}, [page])

	return (
		<div className="App">
			<Header />
			<main>
				<MovieScreen
					movieList={movieList}
					watchList={watchList}
					page={page}
					setPage={setPage}
					addMovie={addMovie}
					removeMovie={removeMovie}
				/>
				<Watchlist watchList={watchList} removeMovie={removeMovie} />
			</main>
		</div>
	)
}

export default App
