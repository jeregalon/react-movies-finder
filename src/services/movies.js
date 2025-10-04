const API_KEY = '6067a8bf'

export const searchMovies = async (search) => {
    const SEARCH_LINK = `http://omdbapi.com/?apikey=${API_KEY}&s=${search}`
    if (search === '') return null

    try {
        const res = await fetch(SEARCH_LINK)
        const json = await res.json()
        const movies = json.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))
    } catch (e) {
        throw new Error(e)
    }
}