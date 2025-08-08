import { useState } from 'react'
import { MovieCard } from './components/MovieCard'
import { MOVIES } from './movies.data'
import './styles/App.css'
import './styles/Header.css'

function App() {
  const [ searchTerm, setSearchTerm ] = useState('')

  const movies = MOVIES.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
  
  return (
    <>
    <header>
      <div className="container">
      <img src="./logo.png" alt="Logo" className='header__logo' />
      <input className='header__input' placeholder='Поиск фильмов...' type="search" value={searchTerm} onChange={e => {
        setSearchTerm(e.target.value)
      }} />
      </div>
    </header>
    <main>
      <div className="container">
        <div className="cards">
        {
          movies.length ? movies.map(movie => (
            <MovieCard
             title={movie.title}
             rating={movie.rating} 
             img={movie.img} 
             key={movie.key}
             linkURL={movie.linkURL}
            />
          )) : <p>Фильмов по запросу <b>{searchTerm}</b> не найдено </p>  }
        </div>
        </div>

    </main>
    </>
  )
}

export default App
