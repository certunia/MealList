import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import Login from "./screens/auth/Login";
import SignUp from "./screens/auth/SignUp";
import Home from "./screens/menu/Search";
import ShopList from "./screens/shopList/Index";
import EmailCheck from "./screens/auth/EmailCheck";
import Profile from "./screens/auth/Profile";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
import { useTheme } from 'react-native-paper';

function authScreens(signedIn) {
    const theme = useTheme();

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'transparent',
                    shadowColor: 'transparent',
                    color: theme.colors.onSurface,
                    borderWidth: 0,
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerShadowVisible: false,
                headerTintColor: theme.colors.onSurface,
            }}
        >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    // When logging out, a pop animation feels intuitive
                    // You can remove this if you want the default 'push' animation
                    animationTypeForReplace: signedIn ? 'pop' : 'push',
                }}/>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="EmailCheck" component={EmailCheck} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}

function mainNavigation() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="ShopList" component={ShopList} />
        </Tab.Navigator>
    )
}

export const createRootNavigator = (signedIn = false) => {
    return () =>
        signedIn ? (
                // User is signed in
                mainNavigation()
            ) : (
                // No token found, user isn't signed in
                authScreens(signedIn)
            )
}
