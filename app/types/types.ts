import { AppStyles, ColorMap, CustomTheme } from "./themeTypes";
import { KeyboardType, TextContentType } from "./keyboardTypes";
//AUTH TYPES
export type User = {
  loggedIn: boolean;
  email: string | null;
  uid: number;
};

export type { AppStyles, ColorMap, CustomTheme, KeyboardType, TextContentType };
