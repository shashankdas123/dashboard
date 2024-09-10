import React, { useState } from "react";

import SellActionWindow from "./SellActionWindow";

const GeneralContextS = React.createContext({
  openSellWindow: (uid) => {
    console.log("i am open window")
  },
  closeSellWindow: () => {},
});

export const GeneralContextSProvider = (props) => {
    console.log("i am handle open window")
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenSellWindow = (uid) => {


    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContextS.Provider
      value={{
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContextS.Provider>
  );
};

export default GeneralContextS;