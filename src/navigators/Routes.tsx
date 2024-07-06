import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setToken } from "../features/authSlice";
import Container from "../components/Container";
import { ActivityIndicator } from "react-native";

const AppContainer = () => {

    const RootStack = createNativeStackNavigator();

    const [isLoading, setIsLoading] = useState(true);

    const token = useSelector((state: RootState) => state.auth.token);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const storedToken = await AsyncStorage.getItem('token');
                if (storedToken) {
                    dispatch(setToken(storedToken));
                }
            } catch (error) {
                console.error('Error fetching token from AsyncStorage:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchToken();
    }, [dispatch]);

    if (isLoading) {
        return (
            <Container containerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="green" />
            </Container>
        );
    }

    return (
        <RootStack.Navigator
            screenOptions={{ headerShown: false, animation: 'none' }}
        >
            {token === null ?
                <RootStack.Screen
                    name="AuthNavigator"
                    component={AuthNavigator}
                />
                :
                <RootStack.Screen
                    name="AppNavigator"
                    component={AppNavigator}
                />
            }
        </RootStack.Navigator>
    )
}

export default AppContainer;