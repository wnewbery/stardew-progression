import { PropsWithChildren, useState } from "react";
import ChecklistCompletion from "../data/ChecklistCompletion";

type ChecklistItemProps = {
  className?: string;
  id: string;
}

export default ({ id, className, children }: PropsWithChildren<ChecklistItemProps>) => {
  const [isCompleted, setCompletedX] = useState(ChecklistCompletion.isCompleted(id));
  function setCompleted(v: boolean) {
    ChecklistCompletion.setCompleted(id, v);
    setCompletedX(v);
  }
  function onCompleted(evt: React.ChangeEvent<HTMLInputElement>) {
    setCompleted(evt.currentTarget.checked);
  }
  const toggle = (evt: React.MouseEvent<HTMLElement>) => {
    const e = evt.target as HTMLElement;
    if (!e.closest('a')) { // If click hit some link, don't toggle
      setCompleted(!isCompleted);
    }
  }

  return (
    <div onClick={toggle} className={`${className} flex flex-row items-baseline break-inside-avoid-column`}>
      <input type="checkbox" checked={isCompleted} onChange={onCompleted} className="mr-2 flex-none" />
      <div className="flex-auto space-y-4">{children}</div>
    </div>
  );
}