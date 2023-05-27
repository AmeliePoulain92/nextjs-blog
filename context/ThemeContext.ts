import { theme } from "@newsletter/theme";
import { NewsSites } from "@newsletter/utils/enums";
import { Theme as ThemeInterface } from "@newsletter/utils/interfaces";
import { createContext } from "react";

const defaultState = theme[NewsSites.Bevnet];
export const ThemeContext = createContext<ThemeInterface>(defaultState);
