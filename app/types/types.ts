import { AppStyles, ColorMap, CustomTheme } from "./themeTypes";
import { KeyboardType, TextContentType } from "./keyboardTypes";
import { FetchResult } from "@apollo/client";
import {
  EmailPasswordInput,
  LoginMutation,
  RegisterMutation,
} from "../generated/graphql";
//AUTH TYPES
export type User = {
  loggedIn: boolean;
  email: string | null;
  uid: number;
};
export type Signin = (
  values: EmailPasswordInput
) => Promise<
  FetchResult<LoginMutation, Record<string, any>, Record<string, any>>
>;

export type Signup = (
  values: EmailPasswordInput
) => Promise<
  FetchResult<RegisterMutation, Record<string, any>, Record<string, any>>
>;

export type Signout = () => void;

export type { AppStyles, ColorMap, CustomTheme, KeyboardType, TextContentType };
