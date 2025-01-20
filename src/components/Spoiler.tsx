import { PropsWithChildren, useState } from "react";

export default function Spoiler({ children }: PropsWithChildren) {
  const [revealed, setRevealed] = useState(false);
  let button;
  if (!revealed) {
    button = (
      <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Reveal Spoiler
      </button>);
  }
  function onClick(evt: React.MouseEvent<HTMLDivElement>) {
    evt.stopPropagation();
    setRevealed(true);
  }

  return (
    <div className="block relative bg-gray-200 p-4 rounded-md" onClick={onClick}>
      <div className={revealed ? "block" : "invisible"}>{children}</div>
      {button}
    </div>
  )
}
