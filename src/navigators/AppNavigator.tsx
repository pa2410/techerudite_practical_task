import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Tabs from "./Tabs";

const RootStack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false,
                headerShadowVisible: false,
                headerTitle: ''
            }}
        >
            <RootStack.Screen name="Tabs" component={Tabs} />
        </RootStack.Navigator>
    )
}

export default AppNavigator;