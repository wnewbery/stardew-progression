import CommunityBundle from "../data/CommunityBundle";
import Markdown from "./Markdown";
import CommunityItem from "../data/CommunityItem";
import ItemStackText from "./ItemStackText";

type CommunityBundleProps = {
  bundle: CommunityBundle
};
type ItemProps = {
  item: CommunityItem
};
const CommunityItemRow = ({ item }: ItemProps) => {
  var countStr = item.count > 1 ? `(${item.count})` : '';
  return (
    <tr>
      <td><ItemStackText stack={item}/></td>
      <td><Markdown html={item.descriptionHtml} /></td>
    </tr>
  )
}

export default ({ bundle }: CommunityBundleProps) => {
  return (
    <div className="bundle">
      <h2>{bundle.label}</h2>
      <ItemStackText stack={bundle.reward} />
      <table className='items'>
        <tbody>
          {bundle.items.map(item => <CommunityItemRow key={item.id} item={item}/>)}
        </tbody>
      </table>
    </div>
  );
};
