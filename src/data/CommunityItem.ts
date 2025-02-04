import { mdToHtml } from "../util/Markdown";
import GameItem from "./GameItem";
import GameData from "./GameData";
import ItemQuality from "./ItemQuality";
import type CommunityBundle from "./CommunityBundle";
import { BundleItemData } from "./YamlTypes";
export default class CommunityItem {
  public id: string;
  public item: GameItem;
  public quality: ItemQuality;
  public count: number;

  // Multiple bundles use the same item, so combine to get a unique id
  public get checklistId() {
    return `${this.bundle.id}-${this.id}`;
  }
  public get label() {
    return this.item.label;
  }

  constructor(
    public bundle: CommunityBundle,
    public yaml: BundleItemData
  ) {
    this.id = yaml.id;
    this.item = GameData.item(yaml.item_id ?? yaml.id); // Construction bundle has 2 wood items
    this.quality = ItemQuality.parse(yaml.quality ?? "regular");
    this.count = yaml.count ?? 1;
  }
  public get labelHtml() { return mdToHtml(this.label); }
}