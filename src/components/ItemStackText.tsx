import GameItem from "../data/GameItem"
import ItemQuality from "../data/ItemQuality"

type ItemInfo = {
  item: GameItem,
  count?: number,
  quality?: ItemQuality
};
type ItemIconProps = {
  stack : ItemInfo
};

export default ({ stack }: ItemIconProps) => {
  let overlayIcon = stack.quality?.overlayIcon ?
    <img src={stack.quality.overlayIcon} style={{position: "absolute", left: 0}}/>
    : '';
  let countStr = stack.count && stack.count > 1 ? ` (${stack.count})` : '';

  return (
    <div>
      <div style={{position: "relative", display: "inline-block", verticalAlign: "middle", width: "24px", height: "24px"}}>
        <img src={stack.item.icon} width="24" height="24" />
        {overlayIcon}
      </div>
      {' '}
      <a target="_blank" href={stack.item.wiki}>{stack.item.label}</a>
      {countStr}
    </div>
  );
}
