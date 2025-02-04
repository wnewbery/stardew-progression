import { PropsWithChildren } from "react";
import { useAppDispatch, useAppSelector } from "../redux/Store";
import { setCompleted } from "../redux/ChecklistSlice";

type ChecklistItemProps = {
  className?: string;
  id: string;
}

export default function ChecklistItem({ id, className, children }: PropsWithChildren<ChecklistItemProps>) {
  const isCompleted = useAppSelector(state => state.checklist.items[id]) ?? false;
  const dispatch = useAppDispatch();

  function set(v: boolean) {
    dispatch(setCompleted({ id, completed: v }));
  }
  function onCompleted(evt: React.ChangeEvent<HTMLInputElement>) {
    set(evt.currentTarget.checked);
  }
  const toggle = (evt: React.MouseEvent<HTMLElement>) => {
    const e = evt.target as HTMLElement;
    if (!e.closest('a')) { // If click hit some link, don't toggle
      set(!isCompleted);
    }
  }

  return (
    <div onClick={toggle} className={`${className} flex flex-row items-baseline break-inside-avoid-column`}>
      <input type="checkbox" checked={isCompleted} onChange={onCompleted} className="mr-2 flex-none" />
      <div className="flex-auto space-y-4">{children}</div>
    </div>
  );
}