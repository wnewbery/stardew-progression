import GuideBirthday, { GuideBirthdayInfo } from "./GuideBirthday";
import GuideSectionContainer from "./GuideSectionContainer";

interface GuideBirthdaysProps {
  season: string;
  birthdays: GuideBirthdayInfo[];
}
export default function GuideBirthdays({ season, birthdays }: GuideBirthdaysProps) {
  const seasonId = season.toLowerCase();
  const id = `/year1-${seasonId}/birthdays`;

  return (
    <GuideSectionContainer title="Birthdays" href={id}>
      {birthdays.map(b => <GuideBirthday key={b.day} season={season} birthday={b} />)}
    </GuideSectionContainer>
  )
}
