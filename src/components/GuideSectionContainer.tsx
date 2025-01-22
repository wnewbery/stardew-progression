import { ReactNode } from "react";
import { useAppSelector, useAppDispatch } from "../redux/Store";
import { setUiElementHidden } from "../redux/ChecklistSlice";

interface GuideSectionProps {
  href: string;
  storeId?: string;
  children: ReactNode;
  className?: string;
}

export default ({ href, storeId, children, className }: GuideSectionProps) => {
  storeId ??= href;
  const hidden = useAppSelector(state => state.checklist.uiElementsHidden[storeId] ?? false);
  const dispatch = useAppDispatch();
  const setDetailsOpen = (evt: React.ToggleEvent<HTMLDetailsElement>) => {
    const open = evt.currentTarget.open;
    dispatch(setUiElementHidden({ id: storeId, hidden: !open }));
  }
  return (
    <details id={href} open={!hidden} onToggle={setDetailsOpen} className={className}>
      {children}
    </details>
  );
}
