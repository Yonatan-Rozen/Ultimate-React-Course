import InfoItem from "./InfoItem";
import Movie from "./Movie";

export default function MoviesList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} onSelectMovie={onSelectMovie} key={movie.imdbID}>
          <InfoItem emoji={"🗓"}>{movie.Year}</InfoItem>
        </Movie>
      ))}
    </ul>
  );
}
