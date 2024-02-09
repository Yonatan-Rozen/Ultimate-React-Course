import InfoItem from "./InfoItem";
import Movie from "./Movie";

export default function WatchedMoviesList({ movies, onDeleteWatched }) {
  return (
    <ul className="list">
      {movies.map((movie) => (
        <Movie
          movie={movie}
          onDeleteWatched={onDeleteWatched}
          key={movie.imdbID}
        >
          <InfoItem emoji={"⭐️"}>{movie.imdbRating}</InfoItem>

          <InfoItem emoji={"🌟"}>{movie.userRating}</InfoItem>
          <InfoItem emoji={"⏳"}>{movie.Runtime}</InfoItem>
        </Movie>
      ))}
    </ul>
  );
}
