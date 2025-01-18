import GameIcons from "./GameIcons";

export default class GameItem {
  public id: string;
  public label: string;
  public icon: string;
  public wiki: string;

  public constructor(yaml: any) {
    this.id = yaml.id;
    this.label = yaml.label;
    this.wiki = yaml.wiki;

    if (!this.id) {
      this.id = this.label.toLocaleLowerCase().replaceAll(' ', '_').replaceAll('\'', '');
    }
    this.icon = GameIcons(this.id);
    if (!this.wiki) {
      this.wiki = `https://stardewvalleywiki.com/${this.label.replaceAll(' ', '_')}`;
    }
  }
}
