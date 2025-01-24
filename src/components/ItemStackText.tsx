import GameData from "../data/GameData";
import GameItem from "../data/GameItem"
import ItemQuality from "../data/ItemQuality"

type Stack = {
  item: GameItem,
  count?: number,
  quality?: ItemQuality
};
type ItemIconProps = {
  className?: string,
  stack?: Stack
  item?: GameItem | string,
  count?: number,
  quality?: ItemQuality | string,
  label?: string
};

export default ({ className, stack, item, quality, label, count }: ItemIconProps) => {
  item ??= stack?.item;
  quality ??= stack?.quality;
  count ??= stack?.count;
  if (!item) throw new Error("ItemStackText: item or stack.item is required");
  if (typeof item === "string") item = GameData.item(item);
  if (typeof quality === "string") quality = ItemQuality.parse(quality);


  let overlayIcon = quality?.overlayIcon ?
    <img src={quality.overlayIcon} className="absolute left-0 top-0" />
    : '';
  let countStr = count && count > 1 ? ` (${count})` : '';

  return (
    <span className={`whitespace-nowrap ${className}`}>
      <span className="inline-block relative align-middle">
        <img src={item.icon} width="24" height="24" />
        {overlayIcon}
      </span>
      {' '}
      <a target="_blank" href={item.wiki}>{label ?? item.label}</a>
      {countStr}
    </span>
  );
}
