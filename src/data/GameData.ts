import itemsData from "../../data/items.yaml";
import communityData from "../../data/community_bundles.yaml";
import buildingsData from "../../data/buildings.yaml";

import CommunityBundle from "./CommunityBundle";
import CommunityRoom from "./CommunityRoom";
import GameItem from "./GameItem";
import Building from "./Building";
import normaliseId from "../NormaliseId";
import Villager from "./Villager";
import {
  BuildingData,
  BundleData,
  CommunityRoomData,
  ItemData,
  VillagerData,
  YamlImportType,
} from "./YamlTypes";
import ItemQuality from "./ItemQuality";

const itemFiles = import.meta.glob<YamlImportType>("../../data/items/*.yaml", {
  eager: true,
});
const villagersData = import.meta.glob<YamlImportType>(
  "../../data/villagers/*.yaml",
  { eager: true }
);

const itemsMap: Map<string, GameItem> = new Map();
const sellableItems: GameItem[] = [];
const jellies: GameItem[] = [];
const pickles: GameItem[] = [];
const roe: GameItem[] = [];
const agedRoe: GameItem[] = [];

let rooms: CommunityRoom[];
let buildings: Building[];
let villagers: Villager[];
let villagersMap: Map<string, Villager>;

function addItem(item: GameItem) {
  if (itemsMap.has(item.id)) {
    throw new Error(`Duplicate item ${item.id}.`);
  }
  itemsMap.set(item.id, item);
  if (item.sell) sellableItems.push(item);
}
function generateJellies(items: GameItem[]) {
  const fruits = items.filter((x) => x.type === "fruit");
  fruits.forEach((x) => {
    const item = new GameItem({
      id: `jelly_${x.id}`,
      icon: "jelly",
      label: `${x.label} Jelly`,
      plural: `${x.label} Jelly`,
      type: "artisan",
      subtype: "jelly",
      wiki: "https://stardewvalleywiki.com/Preserves_Jar",
      sell: 50 + 2 * x.calcSell(ItemQuality.Regular),
      energy: x.edibility && 2 * x.calcEnergy(ItemQuality.Regular),
      health: x.edibility && 2 * x.calcHealth(ItemQuality.Regular),
      ingredient_item: x,
    });
    addItem(item);
    jellies.push(item);
  });
}
function generatePickles(items: GameItem[]) {
  const ingredients = items.filter(
    (x) => (x.isForage || x.isVegtable) && x.edibility && x.edibility > 0
  );
  ingredients.forEach((x) => {
    const item = new GameItem({
      id: `pickle_${x.id}`,
      icon: "pickles",
      label: `Pickled ${x.label}`,
      plural: `Pickled ${x.plural}`,
      type: "artisan",
      subtype: "pickle",
      wiki: "https://stardewvalleywiki.com/Preserves_Jar",
      sell: 50 + 2 * x.calcSell(ItemQuality.Regular),
      energy: Math.floor(1.75 * x.calcEnergy(ItemQuality.Regular)),
      health: Math.floor(1.75 * x.calcHealth(ItemQuality.Regular)),
      ingredient_item: x,
    });
    addItem(item);
    pickles.push(item);
  });
}
function generateRoe(items: GameItem[]) {
  const fish = items.filter((x) => x.roeColour);
  fish.forEach((x) => {
    const item = new GameItem({
      id: `roe_${x.id}`,
      icon: `${x.roeColour}_roe`,
      label: `${x.label} Roe`,
      plural: `${x.label} Roe`,
      sell: 30 + Math.floor((x.sell ?? 1) / 2),
      energy: 50,
      health: 22,
      type: "roe",
      wiki: "https://stardewvalleywiki.com/Roe",
    });
    addItem(item);
    roe.push(item);
  });
}
function generateAgedRoe(items: GameItem[]) {
  items.forEach((x) => {
    const item = new GameItem({
      id: `aged_${x.id}`,
      icon: "aged_roe",
      label: `Aged ${x.label}`,
      sell: (x.sell ?? 1) * 2,
      energy: 100,
      health: 45,
      ingredient_item: x,
    });
    addItem(item);
    agedRoe.push(item);
  });
}

function getItem(id: string) {
  const x = itemsMap.get(normaliseId(id));
  if (x) return x;
  else throw new Error(`Unknown item ${id}.`);
}
function load() {
  itemsMap.clear();
  sellableItems.length = 0;
  jellies.length = 0;
  pickles.length = 0;
  roe.length = 0;
  agedRoe.length = 0;

  for (const itemData of itemsData as ItemData[]) {
    addItem(new GameItem(itemData));
  }
  for (const file of Object.values(itemFiles)) {
    for (const itemData of file.default as ItemData[]) {
      addItem(new GameItem(itemData));
    }
  }
  const baseItems = Array.from(itemsMap.values());
  generateJellies(baseItems);
  generatePickles(baseItems);
  generateRoe(baseItems);
  generateAgedRoe(roe);
  itemsMap.forEach((item) => {
    item.resolveReferences(getItem);
  });

  rooms = (communityData as CommunityRoomData[]).map((yroom) => {
    const bundles = yroom.bundles.map(
      (ybundle: BundleData) => new CommunityBundle(ybundle)
    );
    return new CommunityRoom(yroom.id, yroom.label, bundles);
  });

  buildings = (buildingsData as BuildingData[]).map((x) => new Building(x));

  villagers = Object.keys(villagersData).map((filename) => {
    const data = villagersData[filename].default as VillagerData;
    return new Villager(data);
  });
  villagersMap = new Map(villagers.map((x) => [x.id, x]));
}
export default {
  load,
  item: getItem,
  sellableItems,
  jellies,
  pickles,
  roe,
  agedRoe,
  bundle(id: string) {
    for (const room of rooms) {
      for (const bundle of room.bundles) {
        if (bundle.id === id) {
          return bundle;
        }
      }
    }
    throw new Error(`No community bundle with ID ${id}.`);
  },
  get bundles() {
    return rooms.flatMap((room) => room.bundles);
  },
  building(id: string) {
    const x = buildings.find((building) => building.id === id);
    if (x) return x;
    else throw new Error(`Unknown building ${id}.`);
  },
  get buildings() {
    return buildings;
  },

  villager(id: string) {
    const x = villagersMap.get(normaliseId(id));
    if (x) return x;
    else throw new Error(`Unknown villager ${id}.`);
  },
  get villagers() {
    return villagers;
  },
};
