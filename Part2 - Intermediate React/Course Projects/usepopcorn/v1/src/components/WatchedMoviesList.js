import InfoItem from "./InfoItem";
import Movie from "./Movie";

export default function WatchedMoviesList({ movies }) {
  return (
    <ul className="list">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID}>
          <InfoItem emoji={"⭐️"}>{movie.imdbRating}</InfoItem>
          <InfoItem emoji={"🌟"}>{movie.userRating}</InfoItem>
          <InfoItem emoji={"⏳"}>{movie.runtime} min</InfoItem>
        </Movie>
      ))}
    </ul>
  );
}
