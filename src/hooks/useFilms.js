import { useEffect, useState } from "react"
import { fecthAllFilms } from "../logic/fecth"

export const useFilms = () => {

    const [films, setFilms] = useState(null)

    const fetchData = async (page = false) => {
        const films = await fecthAllFilms(page)
        setFilms(films)
    }

    useEffect(() => {fetchData()}, [])

    return [films, fetchData]

}