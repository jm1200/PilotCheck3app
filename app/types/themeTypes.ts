//THEME TYPES
export interface ColorMap {
  primary: "#031d44";
  secondary: "#04395e";
  green: "#70a288";
  yellow: "#dab785";
  red: "#d5896f";
  black: "#000";
  white: "#fff";
  dark: "#0c0c0c";
  medium: "#6e6969";
  light: "#f8f4f4";
  danger: "#ff5252";
  lightgreen: "lightgreen";
  skyBlue: "#347ff7";
  error: "#FF9494";
  greys: string[];
}

export interface CustomTheme {
  type: "dark" | "light";
  backgroundColor: string;
  textColor: string;
  primary: string;
  ipad: Ipad;
}

export interface AppStyles {
  colors: ColorMap;
  fontSize: {
    small: number;
    medium: number;
    large: number;
  };
  darkTheme: CustomTheme;
  lightTheme: CustomTheme;
  fontFamily: string;
}

interface Ipad {
  groupsMenuBackgroundColor: string;
  checklistMenuBackgroundColor: string;
  checksBackgroundColor: string;
}
