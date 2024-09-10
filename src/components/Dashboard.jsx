import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import { GeneralContextSProvider } from "./GeneralContextS";

function Dashboard(){
  return (
    <div className="dashboard-container">
        <GeneralContextSProvider>
        <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      </GeneralContextSProvider>
      
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Holdings />} />

        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;




