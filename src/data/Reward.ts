import { mdToHtml } from "../util/Markdown";

export default class Reward {
  constructor(
    public label: string,
    public description: string|null,
  ) {

  }


  public get labelHtml() { return mdToHtml(this.label); }
  public get descriptionHtml() {
    if (this.description) return mdToHtml(this.description);
    else return '';
  }
}