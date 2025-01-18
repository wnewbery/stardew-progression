import React, { PropsWithChildren, useState } from "react";
import { HashRouter, Route, Routes, Link, Navigate } from "react-router";
import { createRoot } from "react-dom/client";
import GameData from "./data/GameData";
import CommunityBundle from "./components/CommunityBundle";

import './app.css';
import Year1Spring from "./components/Year1Spring";

const container = document.getElementById("app")!;
const root = createRoot(container);

GameData.load();
let bundles = GameData.bundles;

type LazyTabProps = {
  name: string;
  active: string,
}
function LazyTab({ name, active, children }: PropsWithChildren<LazyTabProps>) {
  if (name !== active) return <div></div>;
  else return <div>{children}</div>;
}

function TabCommunityBundles() {
  return (
    <>
      <h2 className="text-2xl font-bold">Community Bundles</h2>
      {bundles.map(bundle => <CommunityBundle key={bundle.id} bundle={bundle} />)}
    </>);
}
const App = () => {
  const [activeTab, setActiveTab] = useState("bundles");
  return (
    <div className="flex flex-row h-screen v-screen">
      <div className="p-8 max-w-md flex-initial flex flex-col gap-4 overflow-y-auto border-r-2 border-r-solid border-blue-300">
        <h1 className="text-2xl font-bold">Stardew Valley Progression Guide &amp; Tracker</h1>
        <nav>
          <section>
            <ol>
              <li><Link to="/bundles">Community Bundles</Link></li>
              <li><Link to="/friends">Friends</Link></li>
              <li><Link to="/buildings">Buildings</Link></li>
              <li><Link to="/achievements">Achievements</Link></li>
            </ol>
          </section>
          <section>
            <h2 className="text-xl font-bold">1 Year Completion Guide</h2>
            <ol>
              <li><Link to="/year1-spring">Spring</Link></li>
              <li><Link to="/year1-summer">Summer</Link></li>
              <li><Link to="/year1-fall">Fall</Link></li>
              <li><Link to="/year1-winter">Winter</Link></li>
            </ol>
          </section>
        </nav>

        <div className="flex-1"></div> {/*Use up space*/}

        <div>
          <p>Website by William Newbery &copy; 2025</p>
          <p>Get the code and file issues on <a href="https://github.com/wnewbery/stardew-progression">GitHub</a></p>
          <p>Content available under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" className="whitespace-nowrap">Creative Commons Attribution-NonCommercial-ShareAlike</a></p>
          <p>Icons and general game information from <a href="https://stardewvalleywiki.com/">Stardew Valley Wiki</a></p>
        </div>
      </div>
      <div className="p-8 flex-auto overflow-y-auto flex flex-col gap-4">
        <Routes>
          <Route path="/" element={<Navigate to="/bundles" />} />
          <Route path="/bundles" element={<TabCommunityBundles />} />
          <Route path="/year1-spring" element={<Year1Spring />} />
        </Routes>
      </div>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <HashRouter><App /></HashRouter>
  </React.StrictMode>
);
