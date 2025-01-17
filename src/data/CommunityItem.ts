import { mdToHtml } from "../util/Markdown";
import CommunityBundle from "./CommunityBundle";

export default class CommunityItem {
  public get globalId() {
    return `${this.bundleId}-${this.id}`;
  }

  constructor (
    public bundleId: string,
    public id: string,
    public label: string,
    public description: string|null
  ) {

  }
  public get labelHtml() { return mdToHtml(this.label); }
  public get descriptionHtml() {
    if (this.description) return mdToHtml(this.description);
    else return '';
  }
}