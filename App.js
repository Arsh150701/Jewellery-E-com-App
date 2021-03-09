import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import store from "./src/redux";
import App from "./src/App";

export default function Main() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </ReduxProvider>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#b8860b",
    accent: "#faebd7",
  },
};
