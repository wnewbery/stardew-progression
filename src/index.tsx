import React from "react";
import {createRoot} from "react-dom/client";
import CommunityData from "./data/CommunityData";
import CommunityBundle from "./components/CommunityBundle";

const container = document.getElementById("app")!;
const root = createRoot(container);

let bundle = CommunityData.getBundle('spring_foraging_bundle');
let bundles = CommunityData.bundles;
const App = () => {
  return (
    <div>
      {bundles.map(bundle => <CommunityBundle key={bundle.id} bundle={bundle} />)}
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
