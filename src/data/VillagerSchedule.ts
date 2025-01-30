import ScheduleItem from "./ScheduleItem";


// export class ScheduleHeartsCondition {
//   /**hearts < x or hearts >= x.*/
//   public lessThan: boolean;
//   public hearts: number;
// }

export class VillagerDaySchedule {
  // Note, all of these conditions would need to be true
  public rain: boolean;
  public weekdays?: string[];
  public days?: number[];
  public heartEventSeen?: number;

  public schedule: ScheduleItem[];

  public constructor(yaml: any) {
    this.schedule = yaml.schedule.map((x: any) => new ScheduleItem(x));

    // conditions
    this.rain = yaml.rain ?? false;
    if (yaml.weekday) this.weekdays = [yaml.weekday];
    else this.weekdays = yaml.weekdays;
    if (yaml.day) this.days = [yaml.day];
    else this.days = yaml.days;
    if (yaml.heart_event_seen) this.heartEventSeen = yaml.heart_event_seen;
  }
}
export default class VillagerSchedule {
  /**Special schedule for the first year summer green rain event.*/
  public greenRain?: ScheduleItem[];
  /**Special schedule if a vendor at the desert festival.*/
  public desertVendor?: ScheduleItem[];

  public spring?: VillagerDaySchedule[];
  public summer?: VillagerDaySchedule[];
  public fall?: VillagerDaySchedule[];
  public winter?: VillagerDaySchedule[];
  public marriage?: VillagerDaySchedule[];

  public constructor(yaml: any) {
    if (yaml.green_rain) this.greenRain = yaml.green_rain.map((x: any) => new ScheduleItem(x));
    if (yaml.desert_vendor) this.desertVendor = yaml.desert_vendor.map((x: any) => new ScheduleItem(x));

    if (yaml.spring) this.spring = yaml.spring.map((x: any) => new VillagerDaySchedule(x));
    if (yaml.summer) this.summer = yaml.summer.map((x: any) => new VillagerDaySchedule(x));
    if (yaml.fall) this.fall = yaml.fall.map((x: any) => new VillagerDaySchedule(x));
    if (yaml.winter) this.winter = yaml.winter.map((x: any) => new VillagerDaySchedule(x));
    if (yaml.marriage) this.marriage = yaml.marriage.map((x: any) => new VillagerDaySchedule(x));
  }
}
