import CommunityBundle from "../data/CommunityBundle";
import Markdown from "./Markdown";

type CommunityBundleProps = {
  bundle: CommunityBundle
};

export default ({ bundle }: CommunityBundleProps) => {
  return (
    <div className="bundle">
      <h2>{bundle.label}</h2>
      <p><Markdown html={bundle.reward.labelHtml} /></p>
      <p><Markdown html={bundle.reward.descriptionHtml} /></p>
      <table className='items'>
        <tbody>
          {bundle.items.map(item => (
            <tr>
              <td><Markdown html={item.labelHtml} /></td>
              <td><Markdown html={item.descriptionHtml} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
