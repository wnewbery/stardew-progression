import { ReactNode } from "react";
import ChecklistItem from "./ChecklistItem";
import GuideSectionContainer from "./GuideSectionContainer";
import { Item } from "./ItemStackText";
import GuideBirthday, { GuideBirthdayInfo } from "./GuideBirthday";
import Wiki from "./Wiki";

const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

interface GuideDayProps {
  season: string;
  birthdays: GuideBirthdayInfo[];
  day: number;
  title?: string;
  children?: ReactNode;
}
export default ({ season, birthdays, day, title, children }: GuideDayProps) => {
  let birthday = birthdays.find(b => b.day === day);
  let afterFirstCabbageDay = season !== 'Spring' || day >= 7; // Spring 7 first day
  let afterLastCabbageDay = season === 'Winter' && day > 16; // Winter 16 last day
  let isCartDay = day % 7 === 5 || day % 7 === 0; // Friday or Sunday
  let redCabbageDay = isCartDay && afterFirstCabbageDay && !afterLastCabbageDay;
  let suggestRareSeeds = season === 'Summer';

  title ??= `Day ${day} (${weekDays[(day - 1) % 7]})`;
  return (
    <GuideSectionContainer className="space-y-4" href={`/year1-summer/${day}`}>
      <summary className="text-lg font-bold">{title}</summary>
      {birthday && <GuideBirthday season={season} birthday={birthday} />}
      {redCabbageDay && (
        <ChecklistItem id={`${season.toLowerCase()}${day}_cart_red_cabbage_seeds`}>
          <p>If you don't have the red cabbage seeds yet, be sure to visit the Travelling Cart.</p>
          {suggestRareSeeds && (
            <p>
              If you have spare gold also consider <Item>Rare Seed</Item> which when grown
              during <Wiki>Fall</Wiki> yields a <Item>Sweet Gem Berry</Item> and is by far the
              highest Gold/Day crop.
            </p>
          )}
        </ChecklistItem>
      )}
      {children}

      {!birthday && !isCartDay && !children && (
        <p>Nothing special, just keep working on objectives.</p>
      )}
    </GuideSectionContainer>
  );
}
