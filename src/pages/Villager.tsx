import { useParams } from 'react-router-dom';
import ScheduleItem from "../data/ScheduleItem";
import { VillagerDaySchedule } from "../data/VillagerSchedule";
import GameData from "../data/GameData";
import ScheduleDay from '../components/ScheduleDay';

interface ScheduleProps {
  season?: string;
  desertVendor?: ScheduleItem[];
  greenRain?: ScheduleItem[];
  schedule: VillagerDaySchedule[];
}
const Schedule = ({ season, desertVendor, greenRain, schedule }: ScheduleProps) => {
  return (
    <details className="space-y-4" open>
      <summary><h3 className="inline">{season}</h3></summary>
      {desertVendor && <ScheduleDay title="Desert Festival Vendor" schedule={desertVendor} />}
      {greenRain && <ScheduleDay title="Green Rain (Year 1 only)" schedule={greenRain} />}
      {schedule.map((day) => (
        <ScheduleDay key={day.title} title={day.title} schedule={day.schedule} />
      ))}
    </details>
  )
}

export default function Villager() {
  const params = useParams<{ villager: string }>();
  if (!params.villager) throw new Error("No villager specified");
  const villager = GameData.villager(params.villager);
  const schedule = villager.schedule;

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
        {schedule.common && (
          <>
            {schedule.desertVendor && <ScheduleDay title="Desert Festival Vendor" schedule={schedule.desertVendor} />}
            {schedule.greenRain && <ScheduleDay title="Green Rain (Year 1 only)" schedule={schedule.greenRain} />}
            {schedule.common.map((day) => (
              <ScheduleDay key={day.title} title={day.title} schedule={day.schedule} />
            ))}
          </>
        )}
        {schedule.spring && <Schedule season="Spring" desertVendor={schedule.desertVendor} schedule={schedule.spring} />}
        {schedule.summer && <Schedule season="Summer" greenRain={schedule.greenRain} schedule={schedule.summer} />}
        {schedule.fall && <Schedule season="Fall" schedule={schedule.fall} />}
        {schedule.winter && <Schedule season="Winter" schedule={schedule.winter} />}
      </details>
    </div>
  );
}