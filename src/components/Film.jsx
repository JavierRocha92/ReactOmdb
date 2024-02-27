/* eslint-disable react/prop-types */
import "./Film.css";
import { Link } from "react-router-dom";
export const Film = ({id, image, title, date }) => {
 
  return (
    <div className="film d-flex flex-column gap-2">
      <img
        src={`https://image.tmdb.org/t/p/w500/${image}`}
        alt=""
        className="film__image w-100"
      />
      <h2 className="film__title">{title.substring(0, 12)}</h2>
      <p className="film__date">{date}</p>
      <Link to = {`/id/${id}`}>
        <p className='button__film btn w-100 text-light bg-danger w-100"'>Detalles</p>
      </Link>
    </div>
  );
};
