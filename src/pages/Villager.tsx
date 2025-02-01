import { useParams } from 'react-router-dom';
import ScheduleItem from "../data/ScheduleItem";
import { VillagerDaySchedule } from "../data/VillagerSchedule";
import GameData from "../data/GameData";

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


interface ScheduleDayProps {
  title: string;
  schedule: ScheduleItem[];
}
const ScheduleDay = ({ title, schedule }: ScheduleDayProps) => {
  return (
    <div className="w-full">
      <h4>{title}</h4>
      <table className="simple-table w-full">
        <thead>
          <tr>
            <th className="w-24">Time</th>
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
    <details className="space-y-4" open>
      <summary><h3 className="inline">{season}</h3></summary>
      {desertVendor && <ScheduleDay title="Desert Festival Vendor" schedule={desertVendor} />}
      {greenRain && <ScheduleDay title="Green Rain (Year 1 only)" schedule={greenRain} />}
      {schedule.map((day) => {
        let subtitle;
        if (day.rain) subtitle = "Raining";
        if (day.days) subtitle = `${season} ${fmtDays(day.days)}`;
        if (day.weekdays) subtitle = fmtWeekdays(day.weekdays);
        if (day.monToFri) subtitle = "Monday to Friday";
        if (day.option != null) subtitle += ` (Option ${day.option})`;
        if (day.busRestored) subtitle += " (Bus Service Restored)";
        if (day.railAccessible) subtitle += " (Railroad Accessible)";
        if (day.communityCenterRestored) subtitle += " (Community Center Restored)";
        if (day.communityCenterNotRestored) subtitle += " (Community Center Not Restored)";
        if (day.heartEventSeen) subtitle += ` (${season} ${name}'s ${day.heartEventSeen}-heart event seen)`;
        subtitle ??= "Regular Schedule";
        return (
          <ScheduleDay key={subtitle} title={subtitle} schedule={day.schedule} />
        );
      })}
    </details>
  )
}

export default () => {
  const params = useParams<{ villager: string }>();
  if (!params.villager) throw new Error("No villager specified");
  let villager = GameData.villager(params.villager);
  let schedule = villager.schedule;

  return (
    <div className="space-y-8 min-h-full">
      <h1>
        <img src={villager.portrait} alt={villager.name} width={96} height={96} />
        <span>{villager.name}</span>
      </h1>
      <div>
        <div><a target="_blank" href={villager.wiki}>Wiki</a></div>
        <div><strong>Birthday:</strong> {villager.birthday}</div>
      </div>
      <details open>
        <summary className="mb-4"><h2 className="inline">Schedule</h2></summary>
        {schedule.spring && <Schedule name={villager.name} season="Spring" desertVendor={schedule.desertVendor} schedule={schedule.spring} />}
        {schedule.summer && <Schedule name={villager.name} season="Summer" greenRain={schedule.greenRain} schedule={schedule.summer} />}
        {schedule.fall && <Schedule name={villager.name} season="Fall" schedule={schedule.fall} />}
        {schedule.winter && <Schedule name={villager.name} season="Winter" schedule={schedule.winter} />}
      </details>
    </div>
  );
}