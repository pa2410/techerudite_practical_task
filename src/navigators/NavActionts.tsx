import { CommonActions } from "@react-navigation/native";

export const AppNavigator = CommonActions.reset({
    index: 0,
    routes: [
        { name: "AppNavigator" }
    ]
})

export const AuthNavigator = CommonActions.reset({
    index: 0,
    routes: [
        { name: "AuthNavigator" }
    ]
})