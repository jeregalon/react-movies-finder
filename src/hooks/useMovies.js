import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search }) {
    const [movies, setMovies] = useState('')
    const previousSearch = useRef(search)

    const getMovies = () => {
        if (search === previousSearch.current) return
        previousSearch.current = search
        searchMovies(search).then(m => setMovies(m))
    }

    return { movies, getMovies }
}