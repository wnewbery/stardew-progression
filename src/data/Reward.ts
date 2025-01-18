import { mdToHtml } from "../util/Markdown";
import GameItem from "./GameItem";
import GameItems from "./GameItems";

export default class Reward {
  public id: string;
  public item: GameItem;
  public count: number;
  constructor(yaml: any,
  ) {
    this.id = yaml.id;
    this.item = GameItems.get(this.id);
    this.count = yaml.count ?? 1;
  }
}