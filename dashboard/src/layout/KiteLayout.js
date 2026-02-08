import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import TopBar from "../shared/TopBar";
import WatchlistPanel from "../shared/WatchlistPanel";
import BuySellWindow from "../shared/BuySellWindow";

export default function KiteLayout() {
  const [selectedSymbol, setSelectedSymbol] = useState("INFY");

  // ✅ Buy/Sell modal state
  const [trade, setTrade] = useState({
    open: false,
    side: "BUY", // BUY | SELL
    symbol: "INFY",
  });

  // ✅ open handlers (called from Watchlist hover buttons)
  const openBuy = (sym) => setTrade({ open: true, side: "BUY", symbol: sym });
  const openSell = (sym) => setTrade({ open: true, side: "SELL", symbol: sym });

  return (
    <div className="kite-shell">
      <TopBar />

      <div className="kite-body">
        <WatchlistPanel
          selectedSymbol={selectedSymbol}
          onSelectSymbol={setSelectedSymbol}
          onBuy={openBuy}     // ✅ added
          onSell={openSell}   // ✅ added
        />

        <div className="kite-content">
          <Outlet context={{ selectedSymbol, setSelectedSymbol }} />
        </div>
      </div>

      {/* ✅ Zerodha like Buy/Sell popup */}
      <BuySellWindow
        open={trade.open}
        side={trade.side}
        symbol={trade.symbol}
        onClose={() => setTrade((p) => ({ ...p, open: false }))}
        onSubmit={(payload) => {
          console.log("ORDER:", payload); // later we can push to Orders page
          setTrade((p) => ({ ...p, open: false }));
        }}
      />
    </div>
  );
}
