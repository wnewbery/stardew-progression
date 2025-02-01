import normaliseId from "../NormaliseId";
import GameIcons from "./GameIcons";
import VillagerSchedule from "./VillagerSchedule";

export default class Villager {
  public id: string;
  public name: string;
  public birthday: string;
  public schedule: VillagerSchedule;

  public icon: string;
  public portrait: string;

  public get wiki(): string {
    return `https://stardewvalleywiki.com/${this.name}`;
  }

  public constructor(yaml: any) {
    this.id = yaml.id ?? normaliseId(yaml.name);
    this.name = yaml.name;
    this.birthday = yaml.birthday;
    this.schedule = new VillagerSchedule(this.name, yaml.schedule);

    this.portrait = GameIcons(this.name);
    this.icon = GameIcons(this.name + "_icon");
  }
}
