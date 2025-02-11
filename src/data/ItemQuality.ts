import icons from "./GameIcons";

class ItemQuality {
  public static Regular = new ItemQuality(0, "Regular", 1, 0, false);
  public static Silver = new ItemQuality(1, "Silver", 1.25, 1);
  public static Gold = new ItemQuality(2, "Gold", 1.5, 2);
  public static Iridium = new ItemQuality(3, "Iridium", 2, 4);

  public static Values = [this.Regular, this.Silver, this.Gold, this.Iridium];
  public static IdMap = new Map(this.Values.map((x) => [x.id, x]));

  public static parse(str: string) {
    const v = this.IdMap.get(str.toLocaleLowerCase());
    if (v) return v;
    else throw new Error(`Unknown item quality ${str}.`);
  }

  public id: string;
  public overlayIcon?: string;
  public constructor(
    public v: number,
    public label: string,
    public valueMul: number,
    public edibilityMul: number,
    hasIcon = true
  ) {
    this.id = label.toLocaleLowerCase();

    if (hasIcon) this.overlayIcon = icons(`24px-${this.id}_Quality_Icon`);
  }
}
export default ItemQuality;
