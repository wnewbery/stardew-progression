import { mdToHtml } from "../util/Markdown";
import CommunityBundle from "./CommunityBundle";
import Reward from "./Reward";

export default class CommunityRoom {
  constructor(
    public id: string,
    public label: string,
    public reward: Reward,
    public bundles: CommunityBundle[]
  ) {

  }

  public get labelHtml() { return mdToHtml(this.label); }
}