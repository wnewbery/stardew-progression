import { ReactNode, useState } from "react";
import GameData from "../data/GameData";
import ScheduleDay from "../components/ScheduleDay";

interface SelectButtonProps {
  className?: string;
  children: ReactNode;
  selected: string;
  value: string;
  onClick: (value: string) => void;
}
function SelectButton({ className, children, selected, value, onClick }: SelectButtonProps) {
  const isSelected = selected === value;
  return (
    <button
      onClick={() => onClick(value)}
      className={`
        ${className}
        border-2 rounded-md
        hover:border-accent hover:bg-primary
        ${isSelected ? "border-blue-500 hover:border-blue-500" : "border-transparent"}
        `}
    >
      {children}
    </button>
  );
}

interface VillagerPickerProps {
  selected: string;
  setSelected: (villager: string) => void;
}
function VillagerPicker({ selected, setSelected }: VillagerPickerProps) {
  const villagers = GameData.villagers;
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {villagers.map((villager) => {
        const select = () => {
          setSelected(villager.id);
        }
        return (
          <SelectButton key={villager.id} selected={selected} value={villager.id} onClick={select}>
            <img className="block" src={villager.portrait} alt={villager.name} width={96} height={96} />
            <div className="text-center font-bold text-xl text-emphasize">{villager.name}</div>
          </SelectButton>
        );
      })}
    </div>
  )
}
interface CalendarPickerProps {
  season: string;
  day: number;
  setSeason: (season: string) => void;
  setDay: (day: number) => void;
}
function CalendarPicker({ season, day, setSeason, setDay }: CalendarPickerProps) {
  return (
    <div className="flex flex-col gap-2 items-stretch max-w-fit">
      <div className="flex flex-row gap-4">
        <SelectButton className="p-4 flex-1 flex-grow" selected={season} value="spring" onClick={setSeason}>Spring</SelectButton>
        <SelectButton className="p-4 flex-1 flex-grow" selected={season} value="summer" onClick={setSeason}>Summer</SelectButton>
        <SelectButton className="p-4 flex-1 flex-grow" selected={season} value="fall" onClick={setSeason}>Fall</SelectButton>
        <SelectButton className="p-4 flex-1 flex-grow" selected={season} value="winter" onClick={setSeason}>Winter</SelectButton>
      </div>
      <table>
        <thead><tr>
          <th>M</th>
          <th>T</th>
          <th>W</th>
          <th>Th</th>
          <th>F</th>
          <th>Sa</th>
          <th>Su</th>
        </tr></thead>
        <tbody>
          {[1, 8, 15, 22].map((weekStart) => (
            <tr key={weekStart}>
              {[0, 1, 2, 3, 4, 5, 6].map((dayOfWeek) => {
                const dayOfMonth = weekStart + dayOfWeek;
                const isCurrentDay = dayOfMonth === day;
                return (
                  <td key={dayOfMonth} className={isCurrentDay ? "bg-primary" : ""}>
                    <button
                      className={`
                        w-16 h-16 border-2
                        hover:border-accent hover:bg-primary
                        ${isCurrentDay ? "border-blue-500 hover:border-blue-500" : "border-transparent"}
                        `}
                      onClick={() => setDay(dayOfMonth)}
                    >
                      {dayOfMonth}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}

interface CheckboxProps {
  children: ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
}
function Checkbox({ children, checked, onChange }: CheckboxProps) {
  return (
    <label className="block">
      <input type="checkbox" className="mr-4" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      {children}
    </label>
  );
}
export default function VillagerFinder() {
  const [raining, setRaining] = useState(false);
  const [greenRain, setGreenRain] = useState(false);
  const [communityCenterRestored, setCommunityCenterRestored] = useState(false);
  const [busRestored, setBusRestored] = useState(false);
  const [railAccessible, setRailAccessible] = useState(false);

  const [villager, setVillager] = useState("");

  const [season, setSeason] = useState("spring");
  const [day, setDay] = useState(1);

  const selectionReady = villager && season && day;
  const possibleSchedules = [];
  if (selectionReady) {
    const schedule = GameData.villager(villager).schedule;
    const weekday = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"][(day - 1) % 7];
    const monToFri = weekday !== "saturday" && weekday !== "sunday";
    const desertFestival = season === 'spring' && busRestored && day >= 15 && day <= 17;
    if (greenRain && schedule.greenRain) {
      possibleSchedules.push({
        id: `{villager}-greenRain`,
        title: "Green Rain",
        schedule: schedule.greenRain
      });
    } else {
      if (desertFestival && schedule.desertVendor) {
        possibleSchedules.push({
          id: `{villager}-desertVendor`,
          title: "Desert Vendor",
          schedule: schedule.desertVendor
        });
      }
      let seasonSchedule;
      if (season === 'spring') seasonSchedule = schedule.spring;
      if (season === 'summer') seasonSchedule = schedule.summer;
      if (season === 'fall') seasonSchedule = schedule.fall;
      if (season === 'winter') seasonSchedule = schedule.winter;
      seasonSchedule ??= schedule.common;
      if (seasonSchedule) {
        for (let i = 0; i < seasonSchedule.length; i++) {
          const daySchedule = seasonSchedule[i];
          let final = true;
          if (daySchedule.season && daySchedule.season !== season) continue;
          if (daySchedule.days && !daySchedule.days.includes(day)) continue;
          if (daySchedule.monToFri && !monToFri) continue;
          if (daySchedule.weekdays && !daySchedule.weekdays.includes(weekday)) continue;
          if (daySchedule.communityCenterRestored && !communityCenterRestored) continue;
          if (daySchedule.communityCenterNotRestored && communityCenterRestored) continue;
          if (daySchedule.busRestored && !busRestored) continue;
          if (daySchedule.railAccessible && !railAccessible) continue;
          if (daySchedule.rain) {
            if (!raining) continue;
            if (daySchedule.option === 1) final = false; // Option 2 should be next
          }
          if (daySchedule.heartEventSeen) final = false; // Check not implemented
          if (daySchedule.special) final = false; // Check not implemented

          possibleSchedules.push({
            id: `${villager}-${season}-${i}`,
            title: daySchedule.title,
            schedule: daySchedule.schedule
          });
          if (final) break;
        }
      }
    }
  }
  return (
    <div className="space-y-8 min-h-full">
      <h1>Villager Finder</h1>
      <h2>Milestones &amp; Events</h2>
      <div className="space-y-2">
        <Checkbox checked={raining} onChange={setRaining}>Raining</Checkbox>
        <Checkbox checked={greenRain} onChange={setGreenRain}>Green Rain (Year 1 only)</Checkbox>
        <Checkbox checked={busRestored} onChange={setBusRestored}>Bus Service Restored (Desert Access)</Checkbox>
        <Checkbox checked={railAccessible} onChange={setRailAccessible}>Railroad Accessible (Summer 3 of first year)</Checkbox>
        <Checkbox checked={communityCenterRestored} onChange={setCommunityCenterRestored}>Community Center Restored (JojaMart closed)</Checkbox>
      </div>
      <h2>Pick Villager</h2>
      <VillagerPicker selected={villager} setSelected={setVillager} />
      <h2>Pick Date</h2>
      <CalendarPicker season={season} day={day} setSeason={setSeason} setDay={setDay} />
      {selectionReady && (
        <>
          <h2>Schedule</h2>
          {possibleSchedules.map(({ id, title, schedule }) => (
            <ScheduleDay key={id} title={title} schedule={schedule} />
          ))}
        </>
      )}
    </div>
  );
}
