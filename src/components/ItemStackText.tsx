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
    <img src={stack.quality.overlayIcon} className="absolute left-0 top-0" />
    : '';
  let countStr = stack.count && stack.count > 1 ? ` (${stack.count})` : '';

  return (
    <span className="whitespace-nowrap">
      <span className="inline-block relative align-middle">
        <img src={stack.item.icon} width="24" height="24" />
        {overlayIcon}
      </span>
      {' '}
      <a target="_blank" href={stack.item.wiki}>{stack.item.label}</a>
      {countStr}
    </span>
  );
}
