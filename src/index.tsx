import React from "react";
import {createRoot} from "react-dom/client";
import CommunityData from "./data/CommunityData";
import CommunityBundle from "./components/CommunityBundle";

import './app.css';

const container = document.getElementById("app")!;
const root = createRoot(container);

let bundle = CommunityData.getBundle('spring_foraging_bundle');
let bundles = CommunityData.bundles;
const App = () => {
  return (
    <div className="flex flex-row h-screen v-screen">
      <div className="p-8 flex-initial">
        <h1 className="text-2xl font-bold">Stardew Valley Progression Guide &amp; Tracker</h1>
      </div>
      <div className="p-8 flex-auto overflow-y-auto flex flex-col gap-4">
        {bundles.map(bundle => <CommunityBundle key={bundle.id} bundle={bundle} />)}
      </div>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
