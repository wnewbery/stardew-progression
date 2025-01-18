import Showdown from "showdown";
import CommunityItem from "./CommunityItem";
import Reward from "./Reward";
import {mdToHtml} from "../util/Markdown";

export default class CommunityBundle {
  constructor(
    public id: string,
    public label: string,
    public reward: Reward,
    public items: CommunityItem[]
  ) {
    if (!this.id) this.id = this.label.toLocaleLowerCase().replaceAll(' ', '_');
    console.log('bundle', this.id, this);
  }
  public get labelHtml() { return mdToHtml(this.label); }
}