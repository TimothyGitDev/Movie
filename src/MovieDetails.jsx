import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MOVIES } from './movies.data'
import './styles/Header.css'
import './styles/MoviePage.css'

export function MovieDetails() {
	const {id} = useParams()

	const movie = useMemo(() => {
		return MOVIES.find(movie => movie.linkURL === id)
	}, [id])
	
	return (
	<div>
	<header>
		<div className="container">
		  <img src="/logo.png" className='header__logo'/>
		</div>
	</header>
	<div className='container'>
		<div className="moviePG__link">
	  <Link to={`/`} className='btn'>На главную</Link>
		</div>
		<div className="moviePG__info">
		<img
		  className='moviePG__img' src={movie.img}
		/>
		<div className="moviePG__info-text">
			<h3>Описание</h3>
		<p className='moviePG__desc'>{movie.desc}</p>
		</div>
		</div>

		<div className="moviePG__rating">
			<h4>Рейтинг фильма: <b>{movie.rating}</b></h4>
		</div>

		<div className="trailer__container">
			<h4>Трейлер:</h4>
      <iframe width="100%" height="250" src={`https://www.youtube.com/embed/${movie.trailerYouTubeId}?`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;       clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"       referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
		</div>
	</div>
	</div>)
}
