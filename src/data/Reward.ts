import { mdToHtml } from "../util/Markdown";
import GameItem from "./GameItem";
import GameData from "./GameData";

export default class Reward {
  public id: string;
  public item: GameItem;
  public count: number;
  constructor(yaml: any,
  ) {
    this.id = yaml.id;
    this.item = GameData.item(this.id);
    this.count = yaml.count ?? 1;
  }
}