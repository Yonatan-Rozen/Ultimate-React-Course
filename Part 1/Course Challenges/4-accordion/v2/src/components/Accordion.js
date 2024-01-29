import AccordionItem from "./AccordionItem";
import { useState } from "react";

export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={i}
          title={item.title}
        >
          <ul>{item.text}</ul>
        </AccordionItem>
      ))}
    </div>
  );
}
