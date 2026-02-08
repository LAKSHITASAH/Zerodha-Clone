import React, { createContext, useMemo, useState } from "react";

export const GeneralContext = createContext(null);

export function GeneralContextProvider({ children }) {
  const [dummy, setDummy] = useState(0);

  const value = useMemo(() => {
    return { dummy, setDummy };
  }, [dummy]);

  return (
    <GeneralContext.Provider value={value}>
      {children}
    </GeneralContext.Provider>
  );
}
