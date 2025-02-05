import CommunityBundleData from "../data/CommunityBundle";
import Markdown from "./Markdown";
import ItemStackText from "./ItemStackText";
import { useAppDispatch, useAppSelector } from "../redux/Store";
import { setCompleted, setUiElementHidden } from "../redux/ChecklistSlice";
import GameData from "../data/GameData";

type CommunityBundleProps = {
  bundle: CommunityBundleData | string
};
export default function CommunityBundle({ bundle }: CommunityBundleProps) {
  if (typeof bundle === "string") {
    bundle = GameData.bundle(bundle);
  }
  const isBundleCompleted = useAppSelector(state => state.checklist.items[bundle.id] ?? false);
  const bundleExpanded = useAppSelector(state => !state.checklist.uiElementsHidden[bundle.id]);
  const dispatch = useAppDispatch();
  const setBundleOpen = (evt: React.ToggleEvent<HTMLDetailsElement>) => {
    dispatch(setUiElementHidden({ id: bundle.id, hidden: !evt.currentTarget.open }));
  }

  const onBundleCompleted = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCompleted({ id: bundle.id, completed: evt.currentTarget.checked }));
  }
  return (
    <details className="max-w-[750px] break-inside-avoid-column bg-primary border border-secondary rounded-xl" open={bundleExpanded} onToggle={setBundleOpen}>
      <summary className="text-xl font-bold space-x-4 ml-4">
        <img src={bundle.icon} className="inline-block align-middle" />
        <input name={bundle.id} type="checkbox" checked={isBundleCompleted} onChange={onBundleCompleted} className="w-6 h-6 align-middle" />
        <span className="align-middle nowrap">
          {bundle.label}
          <span className="hidden xs:inline"> Bundle</span>
        </span>
      </summary>
      <div className="m-4">
        <span className="font-bold mr-2">Reward:</span>
        <ItemStackText stack={bundle.reward} />
      </div>
      {!bundle.allNeeded && <div className="ml-4">{bundle.needed} items needed</div>}
      <table className="border-t border-secondary w-full">
        <tbody>
          {bundle.items.map(item => {
            const isItemCompleted = useAppSelector(state => state.checklist.items[item.checklistId] ?? false);
            const itemDispatch = useAppDispatch();
            const onItemCompleted = (evt: React.ChangeEvent<HTMLInputElement>) => {
              itemDispatch(setCompleted({ id: item.checklistId, completed: evt.currentTarget.checked }));
            }
            const toggleItem = (evt: React.MouseEvent<HTMLElement>) => {
              const e = evt.target as HTMLElement;
              if (!e.closest('a')) {
                // If click hit some link, don't toggle
                itemDispatch(setCompleted({ id: item.id, completed: !isItemCompleted }));
              }
            }
            return (
              <tr key={item.id} onClick={toggleItem}>
                <td className="min-w-10 h-4 xs:h-6 text-center"><input name={item.checklistId} type="checkbox" checked={isItemCompleted} onChange={onItemCompleted} /></td>
                <td className="w-1 px-2 xs:px-4 h-6">
                  <ItemStackText stack={item} />
                </td>
                <td className="w-full px-2 xs:px-4 h-6"><Markdown md={item.item.sourceHint} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </details>
  );
};
