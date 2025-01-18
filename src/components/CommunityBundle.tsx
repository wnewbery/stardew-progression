import CommunityBundle from "../data/CommunityBundle";
import Markdown from "./Markdown";
import CommunityItem from "../data/CommunityItem";
import ItemStackText from "./ItemStackText";
import { useState } from "react";

type CommunityBundleProps = {
  bundle: CommunityBundle
};
export default ({ bundle }: CommunityBundleProps) => {
  return (
    <div className="bundle">
      <h2>{bundle.label}</h2>
      <ItemStackText stack={bundle.reward} />
      <table className='items'>
        <tbody>
          {bundle.items.map(item => {
            const [isCompleted, setCompleted] = useState(item.isCompleted);
            const countStr = item.count > 1 ? `(${item.count})` : '';
            const onCompleted = (evt: React.ChangeEvent<HTMLInputElement>) => {
              setCompleted(evt.currentTarget.checked);
              item.isCompleted = evt.currentTarget.checked;
            }
            const toggle = (evt: React.MouseEvent<HTMLElement>) => {
              const e = evt.target as HTMLElement;
              if (!e.closest('a')) {
                // If click hit some link, don't toggle
                setCompleted(!isCompleted);
                item.isCompleted = !isCompleted;
              }
            }
            return (
              <tr key={item.id} onClick={toggle}>
                <td><input type="checkbox" checked={isCompleted} onChange={onCompleted}/></td>
                <td><ItemStackText stack={item}/></td>
                <td><Markdown html={item.descriptionHtml} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
