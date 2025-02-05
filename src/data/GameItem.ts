import GameIcons from "./GameIcons";
import { ItemData } from "./YamlTypes";

export default class GameItem {
  public id: string;
  public label: string;
  public icon: string;
  public wiki: string;
  public sourceHint?: string;

  public constructor(yaml: ItemData) {
    this.label = yaml.label;
    this.wiki = yaml.wiki ?? `https://stardewvalleywiki.com/${this.label.replaceAll(' ', '_')}`;
    this.sourceHint = yaml.source_hint;

    this.id = this.label.toLocaleLowerCase().replaceAll(' ', '_').replaceAll(/[':()]/g, '');
    this.icon = GameIcons(this.id);
  }
}
