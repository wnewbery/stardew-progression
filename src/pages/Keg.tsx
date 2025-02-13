import Checkbox from "../components/Checkbox";
import { useState } from "react";
import DataTable, { DataTableColumn } from "../components/DataTable";
import GameData from "../data/GameData";
import GameItem from "../data/GameItem";

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
    header: "Days",
    className: "text-right",
    asc: false,
    get: (item) => item.days,
  },
  {
    header: "Profit/Day",
    className: "text-right",
    asc: false,
    get: (item) => item.profitPerDay,
  },
];
interface DataItem {
  item: GameItem;
  label: string;
  ingredient: GameItem;
  ingredient_amount: number;
  sell: number;
  profit: number;
  energy: number;
  health: number;
  days: number;
  profitPerDay: number;
}
export default function Keg() {
  const [artisan, setArtisan] = useState(false);
  const items = [
    ...GameData.juices,
    ...GameData.wine,
    GameData.item("beer"),
    GameData.item("coffee"),
    GameData.item("green_tea"),
    GameData.item("mead"),
    GameData.item("pale_ale"),
    GameData.item("vinegar"),
  ];
  const data: DataItem[] = items.map((item) => {
    const ingredient = item.ingredientItem!;
    let sell = item.sell ?? 1;
    if (artisan) sell = Math.round(sell * 1.4);
    const cost = (item.ingredientAmount ?? 1) * (ingredient.sell ?? 0);
    // if (
    //   bearsKnowledge &&
    //   (ingredient.id === "blackberry" || ingredient.id === "salmonberry")
    // )
    // cost *= 3;
    // else if (tiller) cost = Math.round(cost * 1.1);
    const days = Math.max(1, Math.ceil((item.processingTime ?? 0) / 1600));
    return {
      item,
      label: item.label,
      ingredient: item.ingredientItem!,
      ingredient_amount: item.ingredientAmount ?? 1,
      sell,
      profit: sell - cost,
      energy: item.energy ?? 0,
      energyPerG: (item.energy ?? 0) / sell,
      health: item.health ?? 0,
      healthPerG: (item.health ?? 0) / sell,
      days,
      profitPerDay: Math.round((sell - cost) / days),
    };
  });
  return (
    <div className="space-y-section min-h-full">
      <h1>Keg</h1>
      <Checkbox checked={artisan} onChange={setArtisan}>
        Artisan (+40% for artisan goods)
      </Checkbox>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
