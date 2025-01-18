import { mdToHtml } from "../util/Markdown";
import GameItem from "./GameItem";
import GameItems from "./GameItems";
import ItemQuality from "./ItemQuality";
import ChecklistCompletion from "./ChecklistCompletion";

export default class CommunityItem {
  public id: string;
  public item: GameItem;
  public quality: ItemQuality;
  public count: number;

  public get globalId() {
    return `${this.bundleId}-${this.id}`;
  }
  public get label() {
    return this.item.label;
  }
  public get isCompleted() {
    return ChecklistCompletion.isCompleted(this.globalId);
  }
  public set isCompleted(v: boolean) {
    ChecklistCompletion.setCompleted(this.globalId, v);
  }

  constructor (
    public bundleId: string,
    public yaml: any
  ) {
    this.id = yaml.id;
    this.item = GameItems.get(yaml.item_id ??this.id); // Construction bundle has 2 wood items
    this.quality = ItemQuality.parse(yaml.quality ?? "regular");
    this.count = yaml.count ?? 1;
  }
  public get labelHtml() { return mdToHtml(this.label); }
}