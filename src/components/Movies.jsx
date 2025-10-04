function ListOfMovies({ movies }) {
    return(
        <ul>
            {
                movies.map(movie => (
                <li key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                    <img src={movie.poster} alt={movie.Title} />
                </li>
                ))
            }
        </ul>
    )
}

function NoMoviesResult() {
    return(
        <p>No se encuentran películas para esta búsqueda</p>
    )
}

export function Movies({ movies, loading, error }) {
    const hasMovies = movies?.length > 0
    return(
        <>
            {loading && <p>Cargando</p>}
            {error}
            {!loading && !error && hasMovies &&  <ListOfMovies movies={movies}/>}
            {!loading && !error && !hasMovies &&  <NoMoviesResult />}
        </>
        
        
    )
}