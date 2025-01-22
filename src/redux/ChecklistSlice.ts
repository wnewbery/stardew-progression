import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";

interface BoolStore {
  [key: string]: boolean;
}
interface Store {
  items: BoolStore;
  uiElementsHidden: BoolStore;
};
interface StoredData {
  items: string[];
  uiElementsHidden: string[];
}
function stringsToBoolMap(items?: string[]) {
  if (!items) return {};

  const obj: BoolStore = {};
  for (const item of items) {
    obj[item] = true;
  }
  return obj;
}
function load(): Store {
  const jsonStr = window.localStorage.getItem("completedItems") ?? "[]";
  const json = JSON.parse(jsonStr) as StoredData;
  return {
    items: stringsToBoolMap(json.items),
    uiElementsHidden: stringsToBoolMap(json.uiElementsHidden)
  }
}
function boolMapToStrings(items: BoolStore) {
  return Object.keys(items).filter(k => items[k]);
}
function save(data: Store) {
  const json = {
    items: boolMapToStrings(data.items),
    uiElementsHidden: boolMapToStrings(data.uiElementsHidden)
  };
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
interface SetUiElementExpandedPayload {
  id: string;
  hidden: boolean;
}
export const checklistSlice = createSlice({
  name: 'checklist',
  initialState: load(),
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
        save(state);
      }
    },
    setUiElementHidden: (state, action: PayloadAction<SetUiElementExpandedPayload>) => {
      if (state.uiElementsHidden[action.payload.id] !== action.payload.hidden) {
        state.uiElementsHidden[action.payload.id] = action.payload.hidden;
        save(state);
      }
    },
    setAll: (state, action: PayloadAction<Store>) => {
      state.items = action.payload.items;
      state.uiElementsHidden = action.payload.uiElementsHidden;
    }
  }
})

export const { setCompleted, setUiElementHidden, setAll } = checklistSlice.actions;
export default checklistSlice.reducer;


export function monitorStorage(dispatch: Dispatch) {
  // Reload the data on local storage change
  window.addEventListener('storage', (event) => {
    if (event.key === 'completedItems') {
      const newData = load();
      dispatch(setAll(newData));
    }
  });
}

