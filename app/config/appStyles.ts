import { Platform } from "react-native";
import { DefaultTheme } from "@react-navigation/native";
import { AppStyles, ColorMap } from "../types/types";

const colors: ColorMap = {
  primary: "#031d44",
  secondary: "#04395e",
  green: "#70a288",
  yellow: "#dab785",
  red: "#d5896f",
  black: "#000",
  white: "#fff",
  dark: "#0c0c0c",
  medium: "#6e6969",
  light: "#f8f4f4",
  danger: "#ff5252",
  lightgreen: "lightgreen",
  skyBlue: "#347ff7",
  error: "#FF9494",
  greys: [
    "#f8f9fa",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#6c757d",
    "#495057",
    "#343a40",
    "#212529",
  ],
};

export const appStyles: AppStyles = {
  colors: colors,
  fontSize: {
    small: 14,
    medium: 20,
    large: 30,
  },
  darkTheme: {
    type: "dark",
    backgroundColor: "#6e6969",
    textColor: "#f8f4f4",
    primary: "#031d44",
    ipad: {
      groupsMenuBackgroundColor: colors.greys[8],
      checklistMenuBackgroundColor: colors.greys[7],
      checksBackgroundColor: colors.greys[6],
    },
  },
  lightTheme: {
    type: "light",
    backgroundColor: "#f8f4f4",
    primary: "#031d44",
    textColor: "black",
    ipad: {
      groupsMenuBackgroundColor: colors.greys[4],
      checklistMenuBackgroundColor: colors.greys[3],
      checksBackgroundColor: colors.greys[2],
    },
  },

  fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
};

export const customNavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: appStyles.colors.primary,
    background: appStyles.colors.white,
  },
};

export const ipadOptionStyles = {
  containerStyles: {
    padding: 5,
    width: "45%",
  },
  textStyles: {
    fontSize: 10,
  },
};

export const phoneOptionStyles = {
  containerStyles: {
    padding: 5,
    width: "40%",
  },
  textStyles: {
    fontSize: 12,
  },
};

export const customButtonIpadStyles = {
  containerStyles: {
    height: 30,
    padding: 5,
    flexDirection: "row",
  },
  textStyles: {
    fontSize: 10,
    flex: 1,
    marginLeft: 10,
  },
};

export const editButtonIpadStyles = {
  containerStyles: { height: 40, padding: 5 },
  textStyles: {
    fontSize: 10,
  },
  iconSize: 20,
};

export const addButtonIpadStyles = {
  containerStyles: {
    height: 25,
    padding: 5,
    width: "90%",
    alignSelf: "center",
  },
  textStyles: {
    fontSize: 10,
  },
};

export const addButtonPhoneStyles = {
  containerStyles: {
    height: 40,
    padding: 5,
    width: "90%",
    alignSelf: "center",
  },
  textStyles: {
    fontSize: 10,
  },
};
