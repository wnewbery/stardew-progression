import GameItem from "./GameItem";
import GameData from "./GameData";
import { ItemStackData } from "./YamlTypes";
export default class Reward {
  public id: string;
  public item: GameItem;
  public count: number;
  constructor(yaml: ItemStackData) {
    this.id = yaml.id;
    this.item = GameData.item(this.id);
    this.count = yaml.count ?? 1;
  }
}