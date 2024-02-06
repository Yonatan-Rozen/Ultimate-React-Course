export default function NumResults({ amountOfMovies }) {
  return (
    <p className="num-results">
      Found <strong>{amountOfMovies}</strong> results
    </p>
  );
}
