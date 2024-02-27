import { apikey, token } from './constants.js'

export const fecthAllFilms = (page = false) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      };
      
       return fetch(`https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page || 1}`, options)
        .then(response => response.json())
        .then(json => json)
        .catch(err => console.error(err));

        
        // return fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US${page || 1}`, options)
        //   .then(response => response.json())
        //   .then(json => json)
        //   .catch(err => console.error(err));
}

export const fecthFilmById = (id) => {
  

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  };
  
   return fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
    .then(response => response.json())
    .catch(err => console.error(err));
}