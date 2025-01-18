import CommunityBundle from "../data/CommunityBundle";
import Markdown from "./Markdown";
import CommunityItem from "../data/CommunityItem";
import ItemStackText from "./ItemStackText";
import { useState } from "react";

type CommunityBundleProps = {
  bundle: CommunityBundle
};
export default ({ bundle }: CommunityBundleProps) => {
  const [isCompleted, setCompleted] = useState(bundle.isCompleted);
  const onBundleCompleted = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCompleted(evt.currentTarget.checked);
    bundle.isCompleted = evt.currentTarget.checked;
  }
  const toggleBundle = (evt: React.MouseEvent<HTMLElement>) => {
    const e = evt.target as HTMLElement;
    if (!e.closest('a')) {
      // If click hit some link, don't toggle
      setCompleted(!isCompleted);
      bundle.isCompleted = !isCompleted;
    }
  }
  const checkBundleCompleted = () => {
    if (isCompleted !== bundle.isCompleted) {
      setCompleted(bundle.isCompleted);
    }
  }

  return (
    <div className="max-w-[750px]">
      <h3 className="text-xl font-bold">
        <img src={bundle.icon} className="inline-block align-middle mr-5" />
        {bundle.label}
      </h3>
      <div onClick={toggleBundle}>
        <input type="checkbox" checked={isCompleted} onChange={onBundleCompleted} className="ml-4 mr-8" />
        <span className="font-bold mr-2">Reward:</span>
        <ItemStackText stack={bundle.reward} />
      </div>
      {!bundle.allNeeded && <div>{bundle.needed} items needed</div>}
      <table>
        <tbody>
          {bundle.items.map(item => {
            const [isItemCompleted, setItemCompleted] = useState(item.isCompleted);
            const countStr = item.count > 1 ? `(${item.count})` : '';
            const onItemCompleted = (evt: React.ChangeEvent<HTMLInputElement>) => {
              setItemCompleted(evt.currentTarget.checked);
              item.isCompleted = evt.currentTarget.checked;
              checkBundleCompleted();
            }
            const toggleItem = (evt: React.MouseEvent<HTMLElement>) => {
              const e = evt.target as HTMLElement;
              if (!e.closest('a')) {
                // If click hit some link, don't toggle
                setItemCompleted(!isItemCompleted);
                item.isCompleted = !isItemCompleted;
                checkBundleCompleted();
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
