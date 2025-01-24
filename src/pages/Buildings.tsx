import Building from "../components/Building";
import GameData from "../data/GameData";
export default () => {
  return (
    <div className="space-y-8 min-h-full">
      <h1 className="text-2xl font-bold">Buildings</h1>
      <div className="space-y-8">
        {GameData.buildings.map((building) => <Building key={building.id} id={building.id} />)}
      </div>
    </div>
  );
}
