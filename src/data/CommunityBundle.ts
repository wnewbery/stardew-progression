import CommunityItem from "./CommunityItem";
import Reward from "./Reward";
import {mdToHtml} from "../util/Markdown";
import GameIcons from "./GameIcons";
import ChecklistCompletion from "./ChecklistCompletion";

export default class CommunityBundle {
  public id: string;
  public label: string;
  public description?: string;
  public reward: Reward;
  public items: CommunityItem[];
  public needed: number;
  public icon: string;

  public get allNeeded() { return this.needed >= this.items.length; }

  public get isCompleted() {
    return ChecklistCompletion.isCompleted(this.id);
  }
  public set isCompleted(v: boolean) {
    ChecklistCompletion.setCompleted(this.id, v);
  }

  constructor(yaml: any) {
    this.id = yaml.id;
    this.label = yaml.label;
    if (!this.id) this.id = this.label.toLocaleLowerCase().replaceAll(' ', '_');
    this.description = yaml.description;

    this.reward = new Reward(yaml.reward);
    this.items = yaml.items.map((item: any) => new CommunityItem(this, item));
    this.needed = yaml.needed ?? this.items.length;

    this.icon = GameIcons(yaml.icon);
  }
  public get labelHtml() { return mdToHtml(this.label); }
}