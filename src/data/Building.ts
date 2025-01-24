import normaliseId from "../NormaliseId";
import GameData from "./GameData";
import GameIcons from "./GameIcons";
import GameItem from "./GameItem";

export default class Building {
  public id: string;
  public label: string;
  public icon: string;
  public wiki: string;
  public cost: number;
  public materials: { item: GameItem, count: number }[];

  public constructor(yaml: any) {
    this.id = yaml.id ?? normaliseId(yaml.label);
    this.label = yaml.label;
    this.wiki = yaml.wiki;
    this.cost = yaml.cost;
    this.materials = yaml.materials.map((x: any) => {
      const item = GameData.item(x.id);
      return { item, count: x.count };
    });
    this.icon = GameIcons('96px-' + this.id);
    if (!this.label) throw new Error(`No label for building ${this.id}.`);
    if (!this.cost) throw new Error(`No cost for building ${this.id}.`);
  }
}
