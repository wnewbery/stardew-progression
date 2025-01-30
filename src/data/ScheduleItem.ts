export default class ScheduleItem {
  public time: string;
  public location: string;
  public constructor(yaml: any) {
    this.time = yaml.time;
    this.location = yaml.location;
    if (!this.time) throw new Error("Time is required");
    if (!this.location) throw new Error("Location is required");
  }
}