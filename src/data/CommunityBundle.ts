import CommunityItem from "./CommunityItem";
import Reward from "./Reward";
import { mdToHtml } from "../util/Markdown";
import GameIcons from "./GameIcons";
import { registerBundle } from "../redux/ChecklistSlice";
import { BundleData } from "./YamlTypes";
import normaliseId from "../NormaliseId";
export default class CommunityBundle {
  public id: string;
  public label: string;
  public description?: string;
  public reward: Reward;
  public items: CommunityItem[];
  public needed: number;
  public icon: string;

  public get allNeeded() { return this.needed >= this.items.length; }

  constructor(yaml: BundleData) {
    this.id = normaliseId(yaml.label) + '_bundle';
    this.label = yaml.label;
    this.description = yaml.description;

    this.reward = new Reward(yaml.reward);
    this.items = yaml.items.map(item => new CommunityItem(this, item));
    this.needed = yaml.needed ?? this.items.length;

    this.icon = GameIcons(yaml.icon);

    registerBundle({
      bundle: this.id,
      needed: this.needed,
      items: this.items.map(item => item.checklistId)
    });
  }
  public get labelHtml() { return mdToHtml(this.label); }
}