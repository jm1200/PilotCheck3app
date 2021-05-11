import React, { createContext, useContext, useEffect, useState } from "react";
import { appStyles } from "../config/appStyles";
import { CustomTheme } from "../types/types";

interface AppState {
  theme: CustomTheme;
  setTheme: React.Dispatch<React.SetStateAction<CustomTheme>>;
}

export const defaultAppState: AppState = {
  theme: appStyles.darkTheme,
  setTheme: () => {},
};

export const AppStateContext = createContext(defaultAppState);

export const AppStateProvider = ({ children }: { children: any }) => {
  const [theme, setTheme] = useState(defaultAppState.theme);

  return (
    <AppStateContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
