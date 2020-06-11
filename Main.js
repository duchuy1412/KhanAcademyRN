import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import App from "./src/App";
import { registerRootComponent } from "expo";
import { Provider as StoreProvider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./src/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </StoreProvider>
  );
}

registerRootComponent(Main);
