import { Films } from "./Films";
import { Paginator } from "./Paginator";
import { useFilms } from "../hooks/useFilms";

export const Home = () => {
  const [films, fetchData] = useFilms();

  if (!films) return;

  return (
    <>
      <Paginator page={films.page} fetchData={fetchData} />

      <Films films={films.results} />
    </>
  );
};
