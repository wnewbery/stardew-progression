import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BoolStore {
  [key: string]: boolean;
}
function load() {
  const jsonStr = window.localStorage.getItem("completedItems") ?? "[]";
  const json = JSON.parse(jsonStr) as string[];
  const obj: BoolStore = {};
  for (const item of json) {
    obj[item] = true;
  }
  return obj;
}
function save(items: BoolStore) {
  const json = Object.keys(items).filter(k => items[k]);
  const jsonStr = JSON.stringify(json);
  window.localStorage.setItem("completedItems", jsonStr);
}

interface ChecklistBundle {
  bundle: string,
  needed: number,
  items: string[]
}
const bundles = new Map<string, ChecklistBundle>();
const bundleItems = new Map<string, ChecklistBundle>();

export function registerBundle(bundle: ChecklistBundle) {
  bundles.set(bundle.bundle, bundle);
  for (const item of bundle.items) {
    bundleItems.set(item, bundle);
  }
}

interface SetPayload {
  id: string;
  completed: boolean;
}

const initItems = load();
export const checklistSlice = createSlice({
  name: 'checklist',
  initialState: {
    items: initItems,
    itemsInit: initItems
  },
  reducers: {
    setCompleted: (state, action: PayloadAction<SetPayload>) => {
      if (state.items[action.payload.id] !== action.payload.completed) {
        state.items[action.payload.id] = action.payload.completed;
        // If were completing an item and it was part of a bundle, that might be completed
        const bundle = bundleItems.get(action.payload.id);
        if (bundle && !state.items[bundle.bundle]) {
          const completed = bundle.items.filter(item => state.items[item]).length;
          if (completed >= bundle.needed) {
            state.items[bundle.bundle] = true;
          }
        }
        save(state.items);
      }
    }
  }
})

export const { setCompleted } = checklistSlice.actions;
export default checklistSlice.reducer;

