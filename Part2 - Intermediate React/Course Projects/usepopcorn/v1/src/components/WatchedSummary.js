import InfoItem from "./InfoItem";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <InfoItem emoji={"#️⃣"}>{watched.length} movies</InfoItem>
        <InfoItem emoji={"⭐️"}>{avgImdbRating}</InfoItem>
        <InfoItem emoji={"🌟"}>{avgUserRating}</InfoItem>
        <InfoItem emoji={"⏳"}>{avgRuntime} min</InfoItem>
      </div>
    </div>
  );
}
