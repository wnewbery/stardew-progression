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
export default function GuideDay({ season, birthdays, day, title, children }: GuideDayProps) {
  const seasonId = `year1-${season.toLowerCase()}`;
  const topHref = `#/${seasonId}/contents`;

  const birthday = birthdays.find(b => b.day === day);

  const afterFirstCabbageDay = season !== 'Spring' || day >= 7; // Spring 7 first day
  const afterLastCabbageDay = season === 'Winter' && day > 16; // Winter 16 last day
  const isCartDay = day % 7 === 5 || day % 7 === 0; // Friday or Sunday
  const redCabbageDay = isCartDay && afterFirstCabbageDay && !afterLastCabbageDay;
  const suggestRareSeeds = season === 'Summer';

  const specialOrdersStarted = (season === 'Fall' && day >= 2) || season === 'Winter'; // Starts Fall 2
  const specialOrdersReset = specialOrdersStarted && (day % 7 === 1); // Monday


  title ??= `Day ${day} (${weekDays[(day - 1) % 7]})`;
  return (
    <GuideSectionContainer title={title} href={`/${seasonId}/day-${day}`} topHref={topHref}>
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
      {specialOrdersReset && (
        <ChecklistItem id={`${season.toLowerCase()}${day}_special_orders_reset`}>
          <p>Special Orders have reset, so check the board for new orders.</p>
        </ChecklistItem>
      )}
      {children}

      {!birthday && !isCartDay && !specialOrdersReset && !children && (
        <p>Nothing special, just keep working on objectives.</p>
      )}
    </GuideSectionContainer>
  );
}
