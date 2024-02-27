import { useEffect, useState } from "react"
import { fecthFilmById } from "../logic/fecth"

export const useFilm = (id) => {

    const [film, setFilm] = useState(null)

    const fetchData = async (id) => {
        const film = await fecthFilmById(id)
        setFilm(film)
    }

    useEffect(() => {fetchData(id)} , [id])

    return film

}


