import { ReactNode } from "react";
import { useAppSelector, useAppDispatch } from "../redux/Store";
import { setUiElementHidden } from "../redux/ChecklistSlice";

interface GuideSectionProps {
  title: string;
  href: string;
  topHref?: string;
  storeId?: string;
  children: ReactNode;
}

const defaultExpand = window.matchMedia('screen and (min-width: 500px)').matches;

export default function GuideSectionContainer({ title, href, topHref, storeId, children }: GuideSectionProps) {
  storeId ??= href;
  const hidden = useAppSelector(
    (state) => state.checklist.uiElementsHidden[storeId] ?? !defaultExpand
  );
  const dispatch = useAppDispatch();
  const setDetailsOpen = (evt: React.ToggleEvent<HTMLDetailsElement>) => {
    const open = evt.currentTarget.open;
    dispatch(setUiElementHidden({ id: storeId, hidden: !open }));
  };
  return (
    <details
      id={href}
      open={!hidden}
      onToggle={setDetailsOpen}
      className="break-inside-avoid-column open:space-y-p"
    >
      <summary>
        <h2 className="inline">{title}</h2>
        {topHref && <a className="ml-section" href={topHref}>Top</a>}
      </summary>
      {children}
    </details>
  );
};
