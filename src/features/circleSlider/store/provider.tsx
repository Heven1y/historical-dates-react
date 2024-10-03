import React from "react";

import CircleSliderStore from "./circleSliderStore";

const CircleSliderStoreContext = React.createContext<
  CircleSliderStore | undefined
>(undefined);

export function CircleSliderStoreProvider({
  children,
  totalSlides,
}: {
  children: React.ReactNode;
  totalSlides: number;
}) {
  const store = React.useMemo(
    () => new CircleSliderStore(totalSlides),
    [totalSlides],
  );

  return (
    <CircleSliderStoreContext.Provider value={store}>
      {children}
    </CircleSliderStoreContext.Provider>
  );
}

export const useCircleSliderStore = () => {
  const context = React.useContext(CircleSliderStoreContext);
  if (context === undefined) {
    throw new Error("useStores must be used within StoreProvider");
  }
  return context;
};
