import { mdToHtml } from "../util/Markdown";
import GameItem from "./GameItem";
import GameData from "./GameData";
import ItemQuality from "./ItemQuality";
import ChecklistCompletion from "./ChecklistCompletion";
import type CommunityBundle from "./CommunityBundle";

export default class CommunityItem {
  public id: string;
  public item: GameItem;
  public quality: ItemQuality;
  public count: number;

  public get globalId() {
    return `${this.bundle.id}-${this.id}`;
  }
  public get label() {
    return this.item.label;
  }
  public get isCompleted() {
    return ChecklistCompletion.isCompleted(this.globalId);
  }
  public set isCompleted(v: boolean) {
    ChecklistCompletion.setCompleted(this.globalId, v);
    if (v) {
      let count = this.bundle.items.filter(item => item.isCompleted).length;
      if (count >= this.bundle.needed) {
        this.bundle.isCompleted = true;
      }
    }
  }

  constructor(
    public bundle: CommunityBundle,
    public yaml: any
  ) {
    this.id = yaml.id;
    this.item = GameData.item(yaml.item_id ?? this.id); // Construction bundle has 2 wood items
    this.quality = ItemQuality.parse(yaml.quality ?? "regular");
    this.count = yaml.count ?? 1;
  }
  public get labelHtml() { return mdToHtml(this.label); }
}