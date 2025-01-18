import CommunityBundle from "../data/CommunityBundle";
import Markdown from "./Markdown";
import ItemStackText from "./ItemStackText";
import { useAppDispatch, useAppSelector } from "../redux/Store";
import { setCompleted } from "../redux/ChecklistSlice";
import GameData from "../data/GameData";

type CommunityBundleProps = {
  bundle: CommunityBundle | string
};
export default ({ bundle }: CommunityBundleProps) => {
  if (typeof bundle === "string") {
    bundle = GameData.bundle(bundle);
  }
  const isBundleCompleted = useAppSelector(state => state.checklist.items[bundle.id]);
  const dispatch = useAppDispatch();

  const onBundleCompleted = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCompleted({ id: bundle.id, completed: evt.currentTarget.checked }));
  }
  const toggleBundle = (evt: React.MouseEvent<HTMLElement>) => {
    const e = evt.target as HTMLElement;
    if (!e.closest('a')) {
      // If click hit some link, don't toggle
      dispatch(setCompleted({ id: bundle.id, completed: !isBundleCompleted }));
    }
  }

  return (
    <div className="max-w-[750px] break-inside-avoid-column">
      <h3 className="text-xl font-bold">
        <img src={bundle.icon} className="inline-block align-middle mr-5" />
        {bundle.label}
      </h3>
      <div onClick={toggleBundle}>
        <input type="checkbox" checked={isBundleCompleted} onChange={onBundleCompleted} className="ml-4 mr-8" />
        <span className="font-bold mr-2">Reward:</span>
        <ItemStackText stack={bundle.reward} />
      </div>
      {!bundle.allNeeded && <div>{bundle.needed} items needed</div>}
      <table>
        <tbody>
          {bundle.items.map(item => {
            const countStr = item.count > 1 ? `(${item.count})` : '';
            const isItemCompleted = useAppSelector(state => state.checklist.items[item.checklistId]);
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
                <td className="p-4"><input type="checkbox" checked={isItemCompleted} onChange={onItemCompleted} /></td>
                <td className="p-4"><ItemStackText stack={item} /></td>
                <td className="p-4"><Markdown md={item.item.sourceHint} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
