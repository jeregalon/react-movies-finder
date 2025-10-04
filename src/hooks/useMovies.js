import { useRef, useState, useMemo } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search)

    const getMovies = useMemo(() => {
        return async ({ search }) => {
            console.log(search)
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
    }, [])

    const sortedMovies = useMemo(() => {
        return sort
            ? [...movies].sort((a, b) => a.year - b.year)
            : movies
    }, [sort, movies]) 

    console.log(sortedMovies)

    return { movies: sortedMovies, getMovies, loading, error }
}