import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppContainer from "./src/navigators/Routes";
import { StatusBar } from "react-native";
import store from "./src/store/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <AppContainer />
      </NavigationContainer>
    </Provider>
  )
}

export default App;