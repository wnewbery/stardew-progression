import icons from "./GameIcons";

class ItemQuality {
  public static Regular = new ItemQuality('Regular', false);
  public static Silver = new ItemQuality('Silver');
  public static Gold = new ItemQuality('Gold');
  public static Iridium = new ItemQuality('Iridium');
  public static Values = [this.Regular, this.Silver, this.Gold, this.Iridium];
  public static IdMap = new Map(this.Values.map(x => [x.id, x]));

  public static parse(str: string) {
    let v = this.IdMap.get(str.toLocaleLowerCase());
    if (v) return v;
    else throw new Error(`Unknown item quality ${str}.`);
  }

  public id: string;
  public overlayIcon?: string;
  public constructor(public label: string, hasIcon = true) {
    this.id = label.toLocaleLowerCase();

    if (hasIcon) this.overlayIcon = icons(`24px-${this.id}_Quality_Icon`);
  }
};
export default ItemQuality;