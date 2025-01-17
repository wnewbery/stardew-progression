import CommunityBundle from "../data/CommunityBundle";
import Markdown from "./Markdown";
import gameIcons from "../data/GameIcons";

type CommunityBundleProps = {
  bundle: CommunityBundle
};

export default ({ bundle }: CommunityBundleProps) => {
  return (
    <div className="bundle">
      <h2>{bundle.label}</h2>
      <div>
        <img src={gameIcons(bundle.reward.itemId)} />
        <Markdown html={bundle.reward.labelHtml} />
      </div>
      <Markdown html={bundle.reward.descriptionHtml} />
      <table className='items'>
        <tbody>
          {bundle.items.map(item => (
            <tr key={item.id}>
              <td><img src={gameIcons(item.id)}/></td>
              <td><Markdown html={item.labelHtml} /></td>
              <td><Markdown html={item.descriptionHtml} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
