import MovieCard from '../movieCard/MovieCard'

function MovieScreen(props) {
	const { movieList, watchList, page, setPage, addMovie, removeMovie } = props

	const movieDisplay = movieList.map((val, idx) => {
		return (
			<MovieCard
				key={val.id}
				movie={val}
				watchList={watchList}
				addMovie={addMovie}
				removeMovie={removeMovie}
			/>
		)
	})

	function decrement() {
		setPage(page - 1)
	}

	function increment() {
		setPage(page + 1)
	}
	
	return (
		<div className="page">
			<h1>Jared's Movie Theatre</h1>
			<h3>Add a movie to your watchlist</h3>
			<div className="btn-container">
				<button onClick={page !== 1 && decrement}>Previous</button>
				<button onClick={increment}>Next</button>
			</div>
			<div className="movie-container">{movieDisplay}</div>
			<div className="btn-container">
				<button onClick={page !== 1 && decrement}>Previous</button>
				<button onClick={increment}>Next</button>
			</div>
		</div>
	)
}

export default MovieScreen
