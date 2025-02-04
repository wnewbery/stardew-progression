import Building from "../components/Building";
import GameData from "../data/GameData";
export default function Buildings() {
  return (
    <div className="space-y-section min-h-full">
      <h1>Buildings</h1>
      {GameData.buildings.map((building) => <Building key={building.id} id={building.id} />)}
    </div>
  );
}
