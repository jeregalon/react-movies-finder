import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search)

    const getMovies = async () => {
        if (search === previousSearch.current) return

        try {
            previousSearch.current = search
            setLoading(true)
            setError(null)
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
       
    }

    const sortedMovies = sort
        ? [...movies].sort((a, b) => a.year - b.year)
        : movies

    console.log(sortedMovies)

    return { movies: sortedMovies, getMovies, loading, error }
}