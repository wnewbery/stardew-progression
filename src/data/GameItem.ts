import GameIcons from "./GameIcons";
import ItemQuality from "./ItemQuality";
import { ItemData } from "./YamlTypes";

export default class GameItem {
  public id: string;
  public type?: string;
  public subtype?: string;
  public label: string;
  public plural: string;
  public icon: string;
  public wiki: string;
  public sourceHint?: string;

  public seasons?: string[];
  public hasQualities: boolean;
  public sell?: number;
  public energy?: number;
  public health?: number;
  public edibility?: number;

  private _ingredientItemId?: string;
  public ingredientItem?: GameItem;
  public roeColour?: string;

  public isForage: boolean;
  public isVegtable: boolean;
  public isFish: boolean;
  public get isJelly() {
    return this.subtype === "jelly";
  }
  public get isPickle() {
    return this.subtype === "pickle";
  }

  public constructor(yaml: ItemData) {
    this.label = yaml.label;
    this.plural = yaml.plural ?? `${this.label}s`;
    this.type = yaml.type;
    this.subtype = yaml.subtype;
    this.wiki =
      yaml.wiki ??
      `https://stardewvalleywiki.com/${this.label.replaceAll(" ", "_")}`;
    this.sourceHint = yaml.source_hint;

    this.id =
      yaml.id ??
      this.label
        .toLocaleLowerCase()
        .replaceAll(" ", "_")
        .replaceAll(/[':()]/g, "");
    this.icon = GameIcons(yaml.icon ?? this.id);
    this.seasons = yaml.seasons;

    this.hasQualities =
      this.type && ["forage"].includes(this.type) ? true : false;
    this.sell = yaml.sell;
    this.energy = yaml.energy;
    this.health = yaml.health;
    this.edibility = yaml.edibility;
    if (yaml.ingredient_item instanceof GameItem)
      this.ingredientItem = yaml.ingredient_item;
    else this._ingredientItemId = yaml.ingredient_item;

    this.isForage = yaml.isForage ?? false;
    this.isVegtable = yaml.isVegtable ?? false;
    this.isFish = yaml.is_fish ?? false;

    this.roeColour = yaml.roe_colour;
  }

  calcSell(quality: ItemQuality) {
    if (!this.sell) return 0;
    return Math.floor(this.sell * quality.valueMul);
  }
  calcEnergy(quality: ItemQuality) {
    if (!this.edibility) throw new Error(`${this.label} has no edibility`);
    return Math.floor(
      Math.ceil(this.edibility * 2.5) + this.edibility * quality.edibilityMul
    );
  }
  calcHealth(quality: ItemQuality) {
    const energy = this.calcEnergy(quality);
    return Math.floor(energy * 0.45);
  }
  calcEnergyPerG(quality: ItemQuality) {
    if (!this.sell) return 0;
    return this.calcEnergy(quality) / this.calcSell(quality);
  }
  calcHealthPerG(quality: ItemQuality) {
    if (!this.sell) return 0;
    return this.calcHealth(quality) / this.calcSell(quality);
  }

  resolveReferences(get: (id: string) => GameItem) {
    if (typeof this._ingredientItemId === "string") {
      this.ingredientItem = get(this._ingredientItemId);
    }
  }
}
