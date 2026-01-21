import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyOpen, setIsBuyOpen] = useState(false);
  const [isSellOpen, setIsSellOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: (uid) => {
          setSelectedStockUID(uid);
          setIsBuyOpen(true);
        },
        closeBuyWindow: () => setIsBuyOpen(false),

        openSellWindow: (uid) => {
          setSelectedStockUID(uid);
          setIsSellOpen(true);
        },
        closeSellWindow: () => setIsSellOpen(false),
      }}
    >
      {props.children}

      {isBuyOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
