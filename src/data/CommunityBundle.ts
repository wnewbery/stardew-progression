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

  }
  public get labelHtml() { return mdToHtml(this.label); }
}