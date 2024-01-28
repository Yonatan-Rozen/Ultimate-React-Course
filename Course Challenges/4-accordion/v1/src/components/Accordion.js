import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItem
          key={item.title}
          num={i}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
}
