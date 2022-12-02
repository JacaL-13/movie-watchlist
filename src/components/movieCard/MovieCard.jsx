function MovieCard(props) {
	const { movie, watchList, addMovie, removeMovie } = props

	const inWatchList = watchList.filter((val) => {
		return val.id === movie.id
	})

	const button =
		inWatchList.length === 0 ? (
			<button onClick={(eve) => {
				eve.stopPropagation()
				addMovie(movie)
			}}>Add to List</button>
		) : (
			<button onClick={(eve) => {
				eve.stopPropagation()
				removeMovie(movie)
			}}>Remove</button>
		)

	const urlTitle = movie.original_title.toLowerCase().replace(/ /g, '-')

	return (
		<div className="movie-card">
			<a
				href={`https://www.themoviedb.org/movie/${movie.id}-${urlTitle}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div>
					<img
						src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
						alt={`${movie.original_title} movie poster`}
					/>
					<h3>{movie.original_title}</h3>
				</div>
			</a>
			{button}
		</div>
	)
}

export default MovieCard
