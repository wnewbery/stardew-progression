import React, { PropsWithChildren, useState } from "react";
import { HashRouter, Route, Routes, Link, Navigate } from "react-router";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
// Our stuff
import GameData from "./data/GameData";
import './app.css';
import { store } from "./redux/Store";
// Pages
import CommunityBundle from "./components/CommunityBundle";
import Year1Spring from "./pages/Year1Spring";
import Year1Summer from "./pages/Year1Summer";
import Buildings from "./pages/Buildings";
import Year1Fall from "./pages/Year1Fall";
import Villagers from "./pages/Villagers";
import Villager from "./pages/Villager";

const container = document.getElementById("app")!;
const root = createRoot(container);

GameData.load();
let bundles = GameData.bundles;

function TabCommunityBundles() {
  return (
    <>
      <h2 className="text-2xl font-bold">Community Bundles</h2>
      {bundles.map(bundle => <CommunityBundle key={bundle.id} bundle={bundle} />)}
    </>);
}
const footer = (
  <>
    <p>Website by William Newbery &copy; 2025</p>
    <p>Get the code and file issues on <a href="https://github.com/wnewbery/stardew-progression">GitHub</a></p>
    <p>Content available under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative&nbsp;Commons Attribution-NonCommercial-ShareAlike</a></p>
    <p>Icons and general game information from <a href="https://stardewvalleywiki.com/">Stardew Valley Wiki</a></p>
  </>
);
const App = () => {
  const [activeTab, setActiveTab] = useState("bundles");
  return (
    <div className="h-screen v-screen xl:flex flex-row ">
      <div className="p-8 xl:max-w-md flex-initial flex flex-col gap-4 overflow-y-auto xl:border-r-2 border-r-solid border-accent">
        <h1>Stardew Valley Progression Guide &amp; Tracker</h1>
        <nav>
          <section>
            <ol>
              <li className="text-lg"><Link to="/achievements">Achievements</Link></li>
              <li className="text-lg"><Link to="/bundles">Community Bundles</Link></li>
              <li className="text-lg"><Link to="/buildings">Buildings</Link></li>
              <li className="text-lg"><Link to="/villagers">Villagers</Link></li>
            </ol>
          </section>
          <section className="mt-4">
            <h2>1 Year Completion Guide</h2>
            <ol>
              <li className="text-lg"><Link to="/year1-spring">Spring</Link></li>
              <li className="text-lg"><Link to="/year1-summer">Summer</Link></li>
              <li className="text-lg"><Link to="/year1-fall">Fall</Link></li>
              <li className="text-lg"><Link to="/year1-winter">Winter</Link></li>
            </ol>
          </section>
        </nav>

        {/*TOC on sidebar only*/}
        <div className="hidden xl:block">

        </div>

        <div className="flex-1"></div> {/*Use up space*/}

        <div className="hidden xl:block">{footer}</div>
      </div>
      <div className="p-8 flex-auto overflow-y-auto flex flex-col gap-4">
        <Routes>
          <Route path="/" element={<Navigate to="/bundles" />} />
          <Route path="/buildings" element={<Buildings />} />
          <Route path="/bundles" element={<TabCommunityBundles />} />
          <Route path="/villagers" element={<Villagers />} />
          <Route path="/villagers/:villager" element={<Villager />} />

          <Route path="/year1-spring/*" element={<Year1Spring />} />
          <Route path="/year1-summer/*" element={<Year1Summer />} />
          <Route path="/year1-fall/*" element={<Year1Fall />} />
        </Routes>
      </div>
      <div className="xl:hidden p-8">{footer}</div>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter><App /></HashRouter>
    </Provider>
  </React.StrictMode>
);
