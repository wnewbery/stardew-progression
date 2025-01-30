import ScheduleItem from "../data/ScheduleItem";
import Villager from "../data/Villager";
import alexData from "../../data/villager_alex.yaml";
import VillagerSchedule, { VillagerDaySchedule } from "../data/VillagerSchedule";

function fmtWeekday(weekday: string) {
  return weekday.charAt(0).toUpperCase() + weekday.slice(1);
}
function fmtWeekdays(weekdays: string[]) {
  if (weekdays.length === 1) return fmtWeekday(weekdays[0]);
  // , ... , or
  return weekdays.slice(0, -1).map(fmtWeekday).join(", ") + " or " + fmtWeekday(weekdays[weekdays.length - 1]);
}


interface ScheduleDayProps {
  title: string;
  schedule: ScheduleItem[];
}
const ScheduleDay = ({ title, schedule }: ScheduleDayProps) => {
  return (
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <table className="simple-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item) => (
            <tr key={item.time}>
              <td>{item.time}</td>
              <td>{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

interface ScheduleProps {
  name: string;
  season: string;
  desertVendor?: ScheduleItem[];
  greenRain?: ScheduleItem[];
  schedule: VillagerDaySchedule[];
}
const Schedule = ({ name, season, desertVendor, greenRain, schedule }: ScheduleProps) => {
  return (
    <div className="space-y-4">
      <h2>{season}</h2>
      {desertVendor && <ScheduleDay title="Desert Festival Vendor" schedule={desertVendor} />}
      {greenRain && <ScheduleDay title="Green Rain (Year 1 only)" schedule={greenRain} />}
      {schedule.map((day) => {
        let subtitle;
        if (day.rain) subtitle = "Raining";
        if (day.days) subtitle = `${season} ${day.days.join(" or ")}`;
        if (day.weekdays) subtitle = fmtWeekdays(day.weekdays);
        if (day.heartEventSeen) subtitle += ` (${season} ${name}'s ${day.heartEventSeen}-heart event seen)`;
        subtitle ??= "Regular Schedule";
        return (
          <ScheduleDay key={subtitle} title={subtitle} schedule={day.schedule} />
        );
      })}
    </div>
  )
}

export default () => {
  let villager = new Villager(alexData);
  let schedule = villager.schedule;

  return (
    <div className="space-y-8 min-h-full">
      <h1>Villagers</h1>
      <div className="space-y-8">
        <img src={villager.icon} alt={villager.name} width={64} height={64} />
        <div>{villager.name}</div>
        <div><a target="_blank" href={villager.wiki}>Wiki</a></div>
        <div>Birthday: {villager.birthday}</div>

        {schedule.spring && <Schedule name={villager.name} season="Spring" desertVendor={schedule.desertVendor} schedule={schedule.spring} />}
        {schedule.summer && <Schedule name={villager.name} season="Summer" greenRain={schedule.greenRain} schedule={schedule.summer} />}
        {schedule.fall && <Schedule name={villager.name} season="Fall" schedule={schedule.fall} />}
        {schedule.winter && <Schedule name={villager.name} season="Winter" schedule={schedule.winter} />}
      </div>
    </div>
  );
}