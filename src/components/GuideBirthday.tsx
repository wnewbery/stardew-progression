import { ReactNode } from "react";
import GameIcons from "../data/GameIcons";
import normaliseId from "../NormaliseId";
import ChecklistItem from "./ChecklistItem";

export interface GuideBirthdayInfo {
  day: number;
  name: string;
  content: ReactNode;
  hide?: boolean;
}

interface GuideBirthdayProps {
  season: string;
  birthday: GuideBirthdayInfo;
}
export default ({ season, birthday }: GuideBirthdayProps) => {
  return (
    <ChecklistItem id={`birthday_${normaliseId(birthday.name)}`}>
      {season} {birthday.day} is {' '}
      <img src={GameIcons(birthday.name + '_icon')} className="inline" />
      {' '}
      <a target="_blank" href={`https://stardewvalleywiki.com/${birthday.name}`}>{birthday.name}'s</a>{' '}
      birthday.{' '}
      {birthday.content}
    </ChecklistItem>
  );
}


