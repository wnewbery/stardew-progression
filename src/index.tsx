import React from "react";
import {createRoot} from "react-dom/client";
import CommunityData from "./data/CommunityData";
import CommunityBundle from "./components/CommunityBundle";

const container = document.getElementById("app")!;
const root = createRoot(container);


let bundle = CommunityData.getBundle('spring_foraging_bundle');
const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <CommunityBundle bundle={bundle} />
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
