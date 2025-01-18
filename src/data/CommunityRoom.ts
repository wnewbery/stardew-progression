import { mdToHtml } from "../util/Markdown";
import CommunityBundle from "./CommunityBundle";

export default class CommunityRoom {
  constructor(
    public id: string,
    public label: string,
    public bundles: CommunityBundle[]
  ) {

  }

  public get labelHtml() { return mdToHtml(this.label); }
}