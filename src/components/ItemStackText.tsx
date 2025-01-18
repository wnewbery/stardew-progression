import GameData from "../data/GameData";
import GameItem from "../data/GameItem"
import ItemQuality from "../data/ItemQuality"

type Stack = {
  item: GameItem,
  count?: number,
  quality?: ItemQuality
};
type ItemIconProps = {
  stack?: Stack
  item?: GameItem | string,
  quality?: ItemQuality | string,
  label?: string
};

export default ({ stack, item, quality, label }: ItemIconProps) => {
  item ??= stack?.item;
  quality ??= stack?.quality;
  if (!item) throw new Error("ItemStackText: item or stack.item is required");
  if (typeof item === "string") item = GameData.item(item);
  if (typeof quality === "string") quality = ItemQuality.parse(quality);


  let overlayIcon = quality?.overlayIcon ?
    <img src={quality.overlayIcon} className="absolute left-0 top-0" />
    : '';
  let countStr = stack?.count && stack.count > 1 ? ` (${stack.count})` : '';

  return (
    <span className="whitespace-nowrap">
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
