import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {useFilm} from '../hooks/useFilm.js'
import './FilmDetail.css'
export const FilmDetail = () => {
  const params = useParams()
  const film = useFilm(params.id)

  
  if(!film)
  return
  
  return (
    <div className="film--detail bg-dark d-flex flex-column p-3">
      <main className="film__main w-100 d-flex mb-4">
      <div className="film__container-image w-50">
        <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt="" className="film__image" />
      </div>
      <div className="film__content w-50 p-3">
        <p className="film__text text-danger">Titulo : <span className="film__text text-light">{film.title || film.name}</span></p>
        <p className="film__text text-danger">Fecha : <span className="film__text text-light">{film.release_date}</span></p>
        <p className="film__text text-danger">Puntuacion : <span className="film__text text-light">{film.vote_count}</span></p>
        <p className="film__text text-danger">Puntuacion media : <span className="film__text text-light">{film.vote_average}</span></p>
        <p className="film__text text-danger">Resumen : <span className="film__text text-light">{film.overview}</span></p>
        {film.homepage && <p className="film__text text-danger">Web : <a href={film.homepage} target='_blank' className="film__text text-light">{film.homepage}</a></p>}
      </div>
      </main>
      <Link to ='/'>
      <button className='button__film btn bg-danger text-light w-100'>Volver</button>
      </Link>
    </div>
    
  )
}
