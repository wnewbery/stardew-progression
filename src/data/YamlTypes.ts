export interface YamlImportType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: any;
}

export interface ItemData {
  label: string;
  source_hint?: string;
  wiki?: string;
}
export interface ItemStackData {
  id: string;
  count?: number;
  quality?: string;
}

export interface BuildingData {
  label: string;
  wiki: string;
  cost: number;
  icon?: string;
  materials?: ItemStackData[];
}

export interface BundleItemData {
  id: string;
  item_id?: string;
  count?: number;
  quality?: string;
}
export interface BundleData {
  label: string;
  icon: string;
  description?: string;
  reward: ItemStackData;
  needed?: number;
  items: BundleItemData[];
}
export interface CommunityRoomData {
  id: string;
  label: string;
  bundles: BundleData[];
}


export interface ScheduleItemData {
  time: string;
  location: string;
}
export interface DayScheduleData {
  special?: string;
  season?: string;
  day?: number;
  days?: number[];
  weekday?: string;
  weekdays?: string[];
  mon_to_fri?: boolean;

  option?: number;

  rain?: boolean;
  bus_restored?: boolean;
  community_center_complete?: boolean;
  community_center_not_complete?: boolean;

  schedule: ScheduleItemData[];
}

export interface ScheduleData {
  green_rain?: DayScheduleData;
  desert_vendor?: DayScheduleData;
  common?: DayScheduleData;
  spring?: DayScheduleData;
  summer?: DayScheduleData;
  fall?: DayScheduleData;
  winter?: DayScheduleData;
}
export interface VillagerData {
  name: string;
  birthday: string;
  schedule: ScheduleData;
}




