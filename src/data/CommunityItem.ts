import { mdToHtml } from "../util/Markdown";
import CommunityBundle from "./CommunityBundle";
import GameItem from "./GameItem";
import GameItems from "./GameItems";

export default class CommunityItem {
  public id: string;
  public item: GameItem;
  public description: string|null;
  public count: number;

  public get globalId() {
    return `${this.bundleId}-${this.id}`;
  }
  public get label() {
    return this.item.label;
  }

  constructor (
    public bundleId: string,
    public yaml: any
  ) {
    this.id = yaml.id;
    this.item = GameItems.get(this.id);
    this.description = yaml.description;
    this.count = yaml.count ?? 1;
  }
  public get labelHtml() { return mdToHtml(this.label); }
  public get descriptionHtml() {
    if (this.description) return mdToHtml(this.description);
    else return '';
  }
}