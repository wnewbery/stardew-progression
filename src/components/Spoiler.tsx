import { useState } from "react";

interface SpoilerProps {
  children: React.ReactNode;
  hideSize?: boolean;
}
export default function Spoiler({ children, hideSize }: SpoilerProps) {
  const [revealed, setRevealed] = useState(false);
  let button, cls = '';
  if (!revealed) {
    button = (
      <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        Reveal Spoiler
      </button>);
    cls = 'cursor-pointer';
  }
  function onClick(evt: React.MouseEvent<HTMLDivElement>) {
    evt.stopPropagation();
    setRevealed(true);
  }

  return (
    <div className={`block relative bg-secondary p-4 rounded-md ${cls}`} onClick={onClick}>
      <div className={revealed ? "block" : (hideSize ? "hidden" : "invisible")}>{children}</div>
      {button}
    </div>
  )
}
