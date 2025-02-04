import ScheduleItem from "../data/ScheduleItem";

interface ScheduleDayProps {
  title: string;
  schedule: ScheduleItem[];
}
export default function ScheduleDay({ title, schedule }: ScheduleDayProps) {
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
