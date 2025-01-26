import GuideBirthday, { GuideBirthdayInfo } from "./GuideBirthday";
import GuideSectionContainer from "./GuideSectionContainer";

interface GuideBirthdaysProps {
  season: string;
  birthdays: GuideBirthdayInfo[];
}
export default ({ season, birthdays }: GuideBirthdaysProps) => {
  let seasonId = season.toLowerCase();
  let id = `/year1-${seasonId}/birthdays`;

  return (
    <GuideSectionContainer className="space-y-4" href={id}>
      <summary className="text-lg font-bold">Birthdays</summary>
      {birthdays.map(b => <GuideBirthday key={b.day} season={season} birthday={b} />)}
    </GuideSectionContainer>
  )
}
