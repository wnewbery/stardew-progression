import GameIcons from "./GameIcons";
import VillagerSchedule from "./VillagerSchedule";

export default class Villager {
  public name: string;
  public birthday: string;
  public schedule: VillagerSchedule;
  public icon: string;

  public get wiki(): string {
    return `https://stardewvalleywiki.com/${this.name}`;
  }

  public constructor(yaml: any) {
    this.name = yaml.name;
    this.birthday = yaml.birthday;
    this.schedule = new VillagerSchedule(yaml.schedule);

    this.icon = GameIcons(this.name + "_icon");
  }
}
