import { useState, useCallback } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'

function App() {

  const [sort, setSort] = useState(false)
  const [search, updateSearch] = useState('')
  const { movies, getMovies, loading, error } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 500
  ), [])

  const handleSubmit = (event) => { 
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className='flex flex-col items-center mt-10'>
      <header className='p-2'>
        <h1 className='text-lg'>Buscador de películas</h1>
        <form className='flex items-center' onSubmit={handleSubmit}>
          <input
            name='query'
            value={search}
            onChange={handleChange}
            placeholder='Avengers, Star Wars, The Matrix...' 
          />
          <input 
            type='checkbox'
            className='ml-5'
            onChange={handleSort}
          />
          <p className='ml-2'>Ordenar por año</p>
          <button 
            type='submit'
            onClick={() => {}}
            className='bg-blue-500 rounded-lg ml-5 w-20 h-10 cursor-pointer'
          >
            Buscar
          </button>
        </form>
      </header>

      <main>
        <Movies 
          movies={movies}
          loading={loading}
          error={error}
        />
      </main>
    </div>
  )
}

export default App
