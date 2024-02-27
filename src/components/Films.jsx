/* eslint-disable react/prop-types */
import {Film} from './Film.jsx'
export const Films = ({ films}) => {


  return (
    <div className='w-100 d-flex flex-wrap gap-3'>
      {films && films.map(film => 
      <Film key = {film.id}
      id = {film.id}
      image = {film.poster_path}
      title = {film.title || film.name}
      date = {film.release_date || '2023-09-11'}
      />)}
    </div>
  )
}
