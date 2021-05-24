import React, { createContext, useContext, useEffect, useState } from "react";
import { appStyles } from "../config/appStyles";
import { CustomTheme } from "../types/types";

interface AppState {
  theme: CustomTheme;
  setTheme: React.Dispatch<React.SetStateAction<CustomTheme>>;
  FFOD: boolean;
  setFFOD: React.Dispatch<React.SetStateAction<boolean>>;
}

export const defaultAppState: AppState = {
  theme: appStyles.darkTheme,
  setTheme: () => {},
  FFOD: true,
  setFFOD: () => {},
};

export const AppStateContext = createContext(defaultAppState);

export const AppStateProvider = ({ children }: { children: any }) => {
  const [theme, setTheme] = useState(defaultAppState.theme);
  const [FFOD, setFFOD] = useState(defaultAppState.FFOD);

  const value = {
    theme,
    setTheme,
    FFOD,
    setFFOD,
  };

  console.log("AppStateProvider.tsx 34 value:", value);
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};
