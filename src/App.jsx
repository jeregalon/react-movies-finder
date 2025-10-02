import { useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {

  const [search, updateSearch] = useState('')
  const { movies, getMovies } = useMovies({ search })

  const handleSubmit = (event) => { 
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => { // forma controlada // muy lento (se recomienda evitarla)
    updateSearch(event.target.value)
  }
  

  // useEffect(() =>{
  //   console.log(mappedMovies)
  // }, [mappedMovies])

  return (
    <div className='flex flex-col items-center mt-10'>
      <header className='p-2'>
        <h1 className='text-lg'>Buscador de películas</h1>
        <form className='' onSubmit={handleSubmit}>
          <input
            // ref={inputRef} 
            name='query'
            value={search}  // forma controlada
            onChange={handleChange}
            placeholder='Avengers, Star Wars, The Matrix...' 
          />
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
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
