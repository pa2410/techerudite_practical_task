import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../screens/AuthStack/Login/Login";

const StackScreen = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <StackScreen.Navigator screenOptions={{ headerShown: false, headerShadowVisible: false, headerTitle: '' }}>
            <StackScreen.Screen name="Login" component={Login} />
        </StackScreen.Navigator>
    )
}

export default AuthNavigator;