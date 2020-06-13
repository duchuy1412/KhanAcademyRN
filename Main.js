import * as React from "react";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import App from "./src/App";
import { registerRootComponent } from "expo";
import { Provider as StoreProvider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import store from "./src/store/store";
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
