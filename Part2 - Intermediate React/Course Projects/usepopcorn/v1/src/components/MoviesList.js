import InfoItem from "./InfoItem";
import Movie from "./Movie";

export default function MoviesList({ movies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID}>
          <InfoItem emoji={"🗓"}>{movie.Year}</InfoItem>
        </Movie>
      ))}
    </ul>
  );
}
