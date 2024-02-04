import { useState } from "react";

export default function TextExpander({
  children,
  expanded = false,
  className,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
}) {
  const [mouseHover, setMouseHover] = useState(false);
  const [expandText, setExpandText] = useState(expanded);
  const amountOfWords = children.split(" ").length;
  const trimmedText =
    children.split(" ").slice(-collapsedNumWords).join(" ") +
    (collapsedNumWords < amountOfWords ? "..." : "");
  const buttonStyle = {
    color: buttonColor,
    cursor: "pointer",
    marginLeft: "4px",
    textDecoration: mouseHover ? "underline" : "none",
  };

  function handleExpandText() {
    setExpandText((expand) => !expand);
  }

  return (
    <div className={className}>
      {expandText ? children : trimmedText}
      {collapsedNumWords < amountOfWords && (
        <span
          role="button"
          style={buttonStyle}
          onClick={handleExpandText}
          onMouseEnter={() => setMouseHover(true)}
          onMouseLeave={() => setMouseHover(false)}
        >
          {expandText ? collapseButtonText : expandButtonText}
        </span>
      )}
    </div>
  );
}
