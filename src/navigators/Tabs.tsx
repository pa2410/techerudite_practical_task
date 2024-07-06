import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Events from "../screens/AppStack/Events/Events";
import Img from "../components/Img";
import images from "../utils/images";
import Search from "../screens/AppStack/Search/Search";
import { fs } from "../utils/styleUtils";
import { fonts } from "../utils/fonts";
import { Platform } from "react-native";
import Favourites from "../screens/AppStack/Favourites/Favourites";
import Profile from "../screens/AppStack/Profile/Profile";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShadowVisible: false,
                tabBarShowLabel: true,
                headerTitleStyle: {
                    color: 'black',
                    fontSize: fs(18),
                    fontFamily: fonts.semiBold,
                },
                tabBarHideOnKeyboard: true,
                headerTintColor: 'black',
                ...Platform.OS == 'android' && {
                    tabBarLabelStyle: {
                        bottom: 10,
                        fontSize: 10
                    },
                    tabBarStyle: {
                        height: 68,
                        paddingHorizontal: 10
                    }
                }
            }}
        >
            <Tab.Screen
                name="Search"
                component={Search}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, focused }) => {
                        return <Img
                            imgSrc={images.search_icon}
                            width={35}
                            height={35}
                            imgStyle={{ resizeMode: 'contain' }}
                        />
                    },
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerShadowVisible: false,
                    tabBarLabel: 'Search'
                })}
            />
            <Tab.Screen
                name="Events"
                component={Events}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, focused }) => {
                        return <Img
                            imgSrc={images.events_icon}
                            width={25}
                            height={25}
                            imgStyle={{ resizeMode: 'contain' }}
                        />
                    },
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerShadowVisible: false,
                    tabBarLabel: 'Event'
                })}
            />
            <Tab.Screen
                name="Favourites"
                component={Favourites}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, focused }) => {
                        return <Img
                            imgSrc={images.favourites_icon}
                            width={25}
                            height={25}
                            imgStyle={{ resizeMode: 'contain' }}
                        />
                    },
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerShadowVisible: false,
                    tabBarLabel: 'Favourites'
                })}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, focused }) => {
                        return <Img
                            imgSrc={images.profile_icon}
                            width={25}
                            height={25}
                            imgStyle={{ resizeMode: 'contain' }}
                        />
                    },
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: 'white'
                    },
                    headerShadowVisible: false,
                    tabBarLabel: 'Profile'
                })}
            />
        </Tab.Navigator>
    )
}

export default Tabs;