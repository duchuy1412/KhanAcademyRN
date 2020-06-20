import * as React from "react";
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import App from "./src/App";
import { registerRootComponent } from "expo";
import { Provider as StoreProvider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import store from "./src/store/store";

const fontConfig = {
  default: {
    regular: {
      fontFamily: "sans-serif",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "sans-serif-medium",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "sans-serif-light",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "sans-serif-thin",
      fontWeight: "normal",
    },
  },
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2962ff",
    accent: "#2962ff",
    background: "#fff",
    surface: "#fff",
    disabled: "#e0e0e0",
    text: "#000",
    placeholder: "#e0e0e0",
    backdrop: "#fff",
  },
  fonts: configureFonts(fontConfig),
};

export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </StoreProvider>
  );
}

registerRootComponent(Main);
