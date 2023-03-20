import Drawer from "./Drawer";
import { useState } from "react";
function App() {
  return (
    <div style={{width: "100%"}}>
    <div className="drawer w-1/3">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          Open drawer
        </label>
        <p>hi</p>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 bg-base-100 text-base-content">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
    <h1>Hello world</h1>
    </div>
    
  );
}

export default App;
