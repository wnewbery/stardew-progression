import GameData from "../data/GameData";
import GameItem from "../data/GameItem";
import { useState } from "react";
import Checkbox from "../components/Checkbox";
import DataTable, { DataTableColumn } from "../components/DataTable";

function strPerG(value: number) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
interface DataItem {
  item: GameItem;
  label: string;
  ingredient: GameItem;
  sell: number;
  profit: number;
  energy: number;
  health: number;
  energyPerG: number;
  healthPerG: number;
}

const columns: DataTableColumn<DataItem>[] = [
  {
    header: "Item",
    get: (item) => item.label,
    render: (item) => (
      <>
        <img
          className="inline align-middle"
          width="24"
          height="24"
          src={item.item.icon}
          alt={item.item.label}
        />
        <img
          className="inline align-middle"
          width="24"
          height="24"
          src={item.ingredient.icon}
          alt={item.ingredient.label}
        />{" "}
        {item.label}
      </>
    ),
  },
  {
    header: "Sell",
    className: "text-right",
    asc: false,
    get: (item) => item.sell,
  },
  {
    header: "Profit",
    className: "text-right",
    asc: false,
    get: (item) => item.profit,
  },
  {
    header: "Energy",
    className: "text-right",
    asc: false,
    get: (item) => item.energy,
  },
  {
    header: "Health",
    className: "text-right",
    asc: false,
    get: (item) => item.health,
  },
  {
    header: "Energy/G",
    className: "text-right",
    asc: false,
    get: (item) => item.energyPerG,
    render: (item) => strPerG(item.energyPerG),
  },
  {
    header: "Health/G",
    className: "text-right",
    asc: false,
    get: (item) => item.healthPerG,
    render: (item) => strPerG(item.healthPerG),
  },
];

export default function PreservesJar() {
  const [tiller, setTiller] = useState(false);
  const [artisan, setArtisan] = useState(false);
  const [bearsKnowledge, setBearsKnowledge] = useState(false);

  const items = [...GameData.jellies, ...GameData.pickles, ...GameData.agedRoe];
  const data: DataItem[] = items.map((item) => {
    const ingredient = item.ingredientItem!;
    let sell = item.sell ?? 1;
    if (artisan) sell = Math.round(sell * 1.4);
    let cost = ingredient.sell ?? 0;
    if (
      bearsKnowledge &&
      (ingredient.id === "blackberry" || ingredient.id === "salmonberry")
    )
      cost *= 3;
    else if (tiller) cost = Math.round(cost * 1.1);
    return {
      item,
      label: item.label,
      ingredient: item.ingredientItem!,
      sell,
      profit: sell - cost,
      energy: item.energy ?? 0,
      energyPerG: (item.energy ?? 0) / sell,
      health: item.health ?? 0,
      healthPerG: (item.health ?? 0) / sell,
    };
  });
  return (
    <div className="space-y-section min-h-full">
      <h1>Preserves Jar</h1>
      <details>
        <summary>Mechanics</summary>
        <p>
          The quality of the ingredients have no effect on the finished product.
        </p>
      </details>
      <fieldset>
        <legend>Seasons</legend>
      </fieldset>
      <fieldset>
        <legend>Professions:</legend>
        <Checkbox checked={tiller} onChange={setTiller}>
          Tiller (+10% for crops).
        </Checkbox>
        <Checkbox checked={artisan} onChange={setArtisan}>
          Artisan (+40% for artisan goods)
        </Checkbox>
        <Checkbox checked={bearsKnowledge} onChange={setBearsKnowledge}>
          Bears Knowledge (3x for blackberries and salmonberries)
        </Checkbox>
      </fieldset>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
