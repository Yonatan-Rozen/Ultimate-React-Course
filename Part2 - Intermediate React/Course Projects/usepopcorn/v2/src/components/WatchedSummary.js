import InfoItem from "./InfoItem";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.Runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <InfoItem emoji={"#️⃣"}>{watched.length} movies</InfoItem>
        <InfoItem emoji={"⭐️"}>{avgImdbRating.toFixed(2)}</InfoItem>
        {avgUserRating > 0 && (
          <InfoItem emoji={"🌟"}>{avgUserRating.toFixed(2)}</InfoItem>
        )}
        <InfoItem emoji={"⏳"}>{avgRuntime.toFixed(0)} min</InfoItem>
      </div>
    </div>
  );
}
