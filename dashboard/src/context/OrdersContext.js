import React, { createContext, useContext, useMemo, useState } from "react";

const OrdersContext = createContext(null);

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([
    // ✅ example orders (so Orders page is not empty)
    {
      id: "ex1",
      time: "09:25:10",
      symbol: "INFY",
      side: "BUY",
      qty: 1,
      priceType: "MARKET",
      price: null,
      status: "COMPLETE",
    },
    {
      id: "ex2",
      time: "10:05:42",
      symbol: "TCS",
      side: "SELL",
      qty: 2,
      priceType: "LIMIT",
      price: 3194.8,
      status: "OPEN",
    },
  ]);

  const addOrder = (order) => {
    setOrders((prev) => [order, ...prev]);
  };

  const value = useMemo(() => ({ orders, addOrder }), [orders]);

  return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>;
}

export function useOrders() {
  const ctx = useContext(OrdersContext);
  if (!ctx) throw new Error("useOrders must be used inside OrdersProvider");
  return ctx;
}
