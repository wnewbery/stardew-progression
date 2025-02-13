import React from "react";
import { HashRouter, Route, Routes, Link, Navigate } from "react-router";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
// Our stuff
import GameData from "./data/GameData";
import "./app.css";
import { store } from "./redux/Store";
// Pages
import CommunityBundle from "./components/CommunityBundle";
import Year1Spring from "./pages/Year1Spring";
import Year1Summer from "./pages/Year1Summer";
import Buildings from "./pages/Buildings";
import Year1Fall from "./pages/Year1Fall";
import Villagers from "./pages/Villagers";
import Villager from "./pages/Villager";
import VillagerFinder from "./pages/VillagerFinder";
import Year1Winter from "./pages/Year1Winter";
import PreservesJar from "./pages/PreservesJar";
import Keg from "./pages/Keg";
const container = document.getElementById("app")!;
const root = createRoot(container);

GameData.load();
const bundles = GameData.bundles;

function PageCommunityBundles() {
  return (
    <div className="space-y-section">
      <h1>Community Bundles</h1>
      {bundles.map((bundle) => (
        <CommunityBundle key={bundle.id} bundle={bundle} />
      ))}
    </div>
  );
}
const footer = (
  <>
    <p>Website by William Newbery &copy; 2025</p>
    <p>
      Get the code and file issues on{" "}
      <a href="https://github.com/wnewbery/stardew-progression">GitHub</a>
    </p>
    <p>
      Content available under{" "}
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
        Creative&nbsp;Commons Attribution-NonCommercial-ShareAlike
      </a>
    </p>
    <p>
      Icons and general game information from{" "}
      <a href="https://stardewvalleywiki.com/">Stardew Valley Wiki</a>
    </p>
  </>
);
const App = () => {
  return (
    <div className="h-screen v-screen xl:flex flex-row ">
      <div className="p-8 xl:max-w-md flex-initial shrink-0 flex flex-col gap-4 overflow-y-auto xl:border-r-2 border-r-solid border-accent">
        <h1>Stardew Valley Progression Guide &amp; Tracker</h1>
        <nav className="space-y-section">
          <section>
            <ol>
              <li className="text-lg">
                <Link to="/bundles">Community Bundles</Link>
              </li>
              <li className="text-lg">
                <Link to="/buildings">Buildings</Link>
              </li>
              <li className="text-lg">
                <Link to="/villagers">Villagers</Link>
              </li>
              <li className="text-lg">
                <Link to="/villager-finder">Villager Finder</Link>
              </li>
            </ol>
          </section>
          <section>
            <h2>Artisan Goods</h2>
            <ol>
              <li className="text-lg">
                <Link to="/keg">Keg</Link>
              </li>
              <li className="text-lg">
                <Link to="/preserves-jar">Preserves Jar</Link>
              </li>
            </ol>
          </section>
          <section>
            <h2>1 Year Completion Guide</h2>
            <ol>
              <li className="text-lg">
                <Link to="/year1-spring">Spring</Link>
              </li>
              <li className="text-lg">
                <Link to="/year1-summer">Summer</Link>
              </li>
              <li className="text-lg">
                <Link to="/year1-fall">Fall</Link>
              </li>
              <li className="text-lg">
                <Link to="/year1-winter">Winter</Link>
              </li>
            </ol>
          </section>
        </nav>
        {/*TOC on sidebar only*/}
        <div className="hidden xl:block"></div>
        <div className="flex-1"></div> {/*Use up space*/}
        <div className="hidden xl:block">{footer}</div>
      </div>
      <div className="pt-8 px-8 grow overflow-y-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/bundles" />} />
          <Route path="/buildings" element={<Buildings />} />
          <Route path="/bundles" element={<PageCommunityBundles />} />
          <Route path="/villagers" element={<Villagers />} />
          <Route path="/villagers/:villager" element={<Villager />} />
          <Route path="/villager-finder" element={<VillagerFinder />} />

          <Route path="/keg" element={<Keg />} />
          <Route path="/preserves-jar" element={<PreservesJar />} />

          <Route path="/year1-spring/*" element={<Year1Spring />} />
          <Route path="/year1-summer/*" element={<Year1Summer />} />
          <Route path="/year1-fall/*" element={<Year1Fall />} />
          <Route path="/year1-winter/*" element={<Year1Winter />} />
        </Routes>
        {/*Force bottom padding even if scrolling.*/}
        <div className="h-8"> </div>
      </div>
      <div className="xl:hidden p-8">{footer}</div>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
