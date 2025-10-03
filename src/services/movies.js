import withoutResults from '../mocks/no-results.json'
const API_KEY = '6067a8bf'

export const searchMovies = async (search) => {
    const SEARCH_LINK = `http://omdbapi.com/?apikey=${API_KEY}&s=${search}`
    if (search) {
        const res = await fetch(SEARCH_LINK)
        const json = await res.json()
        
        const mappedMovies = json.Search?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))

        return mappedMovies
    } else {
        return withoutResults
    }
}