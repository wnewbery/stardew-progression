import GameItem from "../data/GameItem";
import ItemQuality from "../data/ItemQuality";

interface ItemIconProps {
  className?: string;
  item: GameItem;
  quality?: ItemQuality;
}

export default function ItemIcon({ className, item, quality }: ItemIconProps) {
  if (!quality || quality === ItemQuality.Regular) {
    return <img className={className} src={item.icon} alt={item.label} />;
  } else {
    return (
      <span className={`inline-block relative align-middle ${className}`}>
        <img className="max-w-none" src={item.icon} alt={item.label} />
        <img className="absolute left-0 top-0" src={quality.overlayIcon} alt={quality.label} />
      </span>
    );
  }


}

