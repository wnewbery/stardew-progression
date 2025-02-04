import { Link } from "react-router-dom";
import GameData from "../data/GameData";

export default function Villagers() {
  let villagers = GameData.villagers;

  return (
    <div className="space-y-8 min-h-full">
      <h1>Villagers</h1>
      <div className="flex flex-row flex-wrap gap-4">
        {villagers.map((villager) => (
          <div key={villager.name} className="flex flex-row gap-4 w-72">
            <Link className="flex-initial" to={`/villagers/${villager.name}`}>
              <img src={villager.portrait} alt={villager.name} width={96} height={96} />
            </Link>
            <div>
              <h2>
                <Link to={`/villagers/${villager.name}`}>
                  {villager.name}
                </Link>
              </h2>
              <div><a target="_blank" href={villager.wiki}>Wiki</a></div>
              <div><strong>Birthday:</strong> {villager.birthday}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}