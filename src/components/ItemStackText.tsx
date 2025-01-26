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
  label?: string,
  plural?: boolean
};

export default function ItemStackText({ className, stack, item, quality, label, count, plural }: ItemIconProps) {
  item ??= stack?.item;
  quality ??= stack?.quality;
  count ??= stack?.count;
  if (!item) throw new Error("ItemStackText: item or stack.item is required");
  if (typeof item === "string") item = GameData.item(item);
  if (typeof quality === "string") quality = ItemQuality.parse(quality);

  if (!label) {
    label = item.label;
    if (plural) {
      if (label.endsWith('berry')) label = label.replace(/berry$/, 'berries');
      else if (!label.endsWith('s')) label += 's'; // TODO: Not right for every word, or for localisations
    }
  }

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
      <a target="_blank" href={item.wiki}>{label}</a>
      {countStr}
    </span>
  );
}

export function Item({ children }: { children: string }) {
  return <ItemStackText item={children} />
}
export function GoldItem({ children }: { children: string }) {
  return <ItemStackText item={children} quality="gold" />
}
export function Items({ children }: { children: string }) {
  return <ItemStackText item={children} plural={true} />
}
export function GoldItems({ children }: { children: string }) {
  return <ItemStackText item={children} quality="gold" plural={true} />
}

