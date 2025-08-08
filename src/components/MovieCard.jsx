import { Link } from 'react-router-dom'
import '../styles/MovieCard.css'



export function MovieCard({title, desc, img, rating, linkURL}) {
	return (
	  <div className='card'>
		  <img className='card__img' src={img} />
		  <h3 className="card__title">{title}</h3>
			<div className="card__buttons">
		    <p className='card__rating'>{rating}</p>
				<Link to={`/movie/${linkURL}`} className='btn'>Перейти</Link>

			</div>
	  </div>
	)
}
