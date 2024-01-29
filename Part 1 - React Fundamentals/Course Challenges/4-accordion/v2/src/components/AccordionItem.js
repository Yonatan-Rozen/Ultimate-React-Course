export default function AccordionItem({
  num,
  title,
  children,
  curOpen,
  onOpen,
}) {
  const isOpen = num === curOpen;
  function handelDescription() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      className={`${isOpen ? "item open" : "item"}`}
      onClick={handelDescription}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
