import GameData from "../data/GameData";
import GameItem from "../data/GameItem";
import { useAppSelector } from "../redux/Store";
import { setCompleted, setUiElementHidden } from "../redux/ChecklistSlice";
import { useAppDispatch } from "../redux/Store";
import ItemStackText from "./ItemStackText";

interface BuildingProps {
  id: string;
  number?: number;
}

export default ({ id, number }: BuildingProps) => {
  const building = GameData.building(id);
  const completionId = number ? `${id}_${number}` : id;
  const label = number ? `${building.label} ${number}` : building.label;

  const completed = useAppSelector(state => state.checklist.items[completionId] ?? false);
  const expanded = useAppSelector(state => !state.checklist.uiElementsHidden[building.id]);
  const dispatch = useAppDispatch();
  const setBuildingOpen = (evt: React.ToggleEvent<HTMLDetailsElement>) => {
    const open = evt.currentTarget.open;
    dispatch(setUiElementHidden({ id: completionId, hidden: !evt.currentTarget.open }));
  }
  const onCompleted = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCompleted({ id: completionId, completed: evt.currentTarget.checked }));
  }

  return (
    <details className="border rounded-xl bg-slate-200 max-w-xl" open={expanded} onToggle={setBuildingOpen}>
      <summary className="text-xl font-bold space-x-4 ml-4 h-8">
        <input type="checkbox" checked={completed} onChange={onCompleted} className="w-6 h-6 align-middle ml-4" />
        <a className="align-middle" href={building.wiki} target="_blank">{label}</a>
      </summary>

      <hr className="border-slate-400 mt-4" />
      <div className="flex flex-row items-start space-x-8 p-4">
        <img src={building.icon} alt={building.label} width={96} height={96} />
        <div className="grid grid-cols-2 items-start">
          <div className="font-bold">Cost:</div>
          <div>{building.cost.toLocaleString('en-US')}g</div>
          <div className="font-bold">Materials:</div>
          <div>{building.materials.map((material: { item: GameItem, count: number }) => (
            <ItemStackText className="block" key={material.item.id} item={material.item} count={material.count} />
          ))}</div>
        </div>
      </div>
    </details>
  );
}
