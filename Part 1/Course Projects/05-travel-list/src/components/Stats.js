export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🧳</em>
      </footer>
    );

  const numOfItems = items.length;
  // const amountOfPackedItems = items.reduce(
  //   (acc, item) => acc + (item.packed ? 1 : 0),
  //   0
  // );
  const numOfPackedItems = items.filter((item) => item.packed).length;
  const packedPercent =
    numOfItems === 0 ? 100 : Math.round((numOfPackedItems * 100) / numOfItems);

  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numOfItems} items on your list, and already packed
          ${numOfPackedItems} (${packedPercent}%)`}
      </em>
    </footer>
  );
}
