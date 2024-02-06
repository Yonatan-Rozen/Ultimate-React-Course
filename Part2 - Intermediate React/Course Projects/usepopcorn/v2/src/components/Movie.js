export default function Movie({
  movie,
  children,
  onSelectMovie = null,
  onDeleteWatched = null,
}) {
  return (
    <li
      onClick={
        onSelectMovie === null ? () => {} : () => onSelectMovie(movie.imdbID)
      }
    >
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>{children}</div>
      {onDeleteWatched && (
        <button
          className="btn-delete"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          ✖
        </button>
      )}
    </li>
  );
}
