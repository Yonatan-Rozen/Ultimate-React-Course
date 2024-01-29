import { useState } from "react";

export default function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handelDescription() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div
      className={`${isOpen ? "item open" : "item"}`}
      onClick={handelDescription}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && (
        <div className="content-box">
          <ul>{text}</ul>
        </div>
      )}
    </div>
  );
}
