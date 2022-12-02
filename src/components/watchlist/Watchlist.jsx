import MovieCard from '../movieCard/MovieCard'

function Watchlist(props) {
	const { watchList, removeMovie } = props

	const movieDisplay = watchList.map((val, idx) => {
		return <MovieCard key={val.id} movie={val} watchList={watchList} removeMovie={removeMovie} />
	})

	return (
		<div className="watchlist">
			<h1>My Watchlist</h1>
			<div className="movie-container">{movieDisplay}</div>
		</div>
	)
}

export default Watchlist
