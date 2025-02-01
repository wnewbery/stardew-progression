import ScheduleItem from "./ScheduleItem";

function fmtListOr<T>(items: T[], fmt: (item: T) => string) {
  let strings = items.map(fmt);
  if (strings.length === 1) return strings[0];
  // , ... , or
  return strings.slice(0, -1).join(", ") + " or " + strings[strings.length - 1];
}
function fmtDays(days: number[]) {
  return fmtListOr(days, (day) => day.toString());
}
function fmtWeekday(weekday: string) {
  return weekday.charAt(0).toUpperCase() + weekday.slice(1);
}
function fmtWeekdays(weekdays: string[]) {
  return fmtListOr(weekdays, fmtWeekday);
}


// export class ScheduleHeartsCondition {
//   /**hearts < x or hearts >= x.*/
//   public lessThan: boolean;
//   public hearts: number;
// }

export class VillagerDaySchedule {
  public title: string;
  // Note, all of these conditions would need to be true
  public option?: number;

  public rain: boolean;
  public busRestored: boolean;
  public railAccessible: boolean;
  public communityCenterRestored: boolean;
  public communityCenterNotRestored: boolean;

  public weekdays?: string[];
  public monToFri?: boolean;
  public days?: number[];
  public hearts: any;
  public heartEventSeen?: number;

  // "No player has {x} hearts with {villagers}" etc. no logic implemented
  public special?: string;

  public schedule: ScheduleItem[];

  public constructor(villager: string, season: string, yaml: any) {
    this.schedule = yaml.schedule.map((x: any) => new ScheduleItem(x));

    // conditions
    this.option = yaml.option;

    this.rain = yaml.rain ?? false;
    this.busRestored = yaml.bus_restored ?? false;
    this.railAccessible = yaml.rail_accessible ?? false;
    this.communityCenterRestored = yaml.community_center_restored ?? false;
    this.communityCenterNotRestored = yaml.community_center_not_restored ?? false;

    if (yaml.weekday) this.weekdays = [yaml.weekday.toLowerCase()];
    else if (yaml.weekdays) this.weekdays = yaml.weekdays.map((x: string) => x.toLowerCase());
    this.monToFri = yaml.mon_to_fri;
    if (yaml.day) this.days = [yaml.day];
    else this.days = yaml.days;
    if (yaml.hearts) this.hearts = yaml.hearts;
    if (yaml.heart_event_seen) this.heartEventSeen = yaml.heart_event_seen;
    this.special = yaml.special;

    this.title = "Regular Schedule";
    if (this.rain) this.title = "Raining";
    if (this.days) this.title = `${season} ${fmtDays(this.days)}`;
    if (this.weekdays) this.title = fmtWeekdays(this.weekdays);
    if (this.monToFri) this.title = "Monday to Friday";
    if (this.option != null) this.title += ` (Option ${this.option})`;
    if (this.busRestored) this.title += " (Bus Service Restored)";
    if (this.railAccessible) this.title += " (Railroad Accessible)";
    if (this.communityCenterRestored) this.title += " (Community Center Restored)";
    if (this.communityCenterNotRestored) this.title += " (Community Center Not Restored)";
    if (this.heartEventSeen) this.title += ` (${villager}'s ${this.heartEventSeen}-heart event seen)`;
    if (this.special) this.title += ` (${this.special})`;
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

  public constructor(villager: string, yaml: any) {
    if (yaml.green_rain) this.greenRain = yaml.green_rain.map((x: any) => new ScheduleItem(x));
    if (yaml.desert_vendor) this.desertVendor = yaml.desert_vendor.map((x: any) => new ScheduleItem(x));

    if (yaml.spring) {
      this.spring = yaml.spring.map((x: any) =>
        new VillagerDaySchedule(villager, "Spring", x));
    }
    if (yaml.summer) {
      this.summer = yaml.summer.map((x: any) =>
        new VillagerDaySchedule(villager, "Summer", x));
    }
    if (yaml.fall) {
      this.fall = yaml.fall.map((x: any) =>
        new VillagerDaySchedule(villager, "Fall", x));
    }
    if (yaml.winter) {
      this.winter = yaml.winter.map((x: any) =>
        new VillagerDaySchedule(villager, "Winter", x));
    }
    if (yaml.marriage) {
      this.marriage = yaml.marriage.map((x: any) =>
        new VillagerDaySchedule(villager, "Marriage", x));
    }
  }
}
