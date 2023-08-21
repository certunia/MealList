import React from "react";
import { StyleSheet } from 'react-native';
import Login from "./screens/auth/Login";
import SignUp from "./screens/auth/SignUp";
import Menu from "./screens/menu/Index";
import ShopList from "./screens/shopList/Index";
import EmailCheck from "./screens/auth/EmailCheck";
import Profile from "./screens/auth/Profile";
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useTheme } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

const Stack = createStackNavigator();

function authScreens(signedIn) {
    const theme = useTheme();

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    ...styles.headerStyle,
                    color: theme.colors.onSurface,
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
    const Tab = createMaterialBottomTabNavigator();
    const theme = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle: {
                    ...styles.headerStyle,
                    color: theme.colors.onSurface,
                },
                tabBarStyle: {
                    ...styles.tabBarStyle,
                    backgroundColor: theme.colors.elevation.level1,
                },
                tabBarLabelStyle: {
                    fontWeight: 600,
                },
                tabBarActiveBackgroundColor: theme.colors.elevation.level1,
                headerShadowVisible: false,
                headerTintColor: theme.colors.onSurface,
            }}
        >
            <Tab.Screen
                name="Menu"
                component={Menu}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <Icon name="silverware-variant" size={24}/>,
                }}
            />
            <Tab.Screen
                name="ShopList"
                component={ShopList}
                options={{
                    tabBarIcon: () => <Icon name="cart-outline" size={24}/>
                }}
            />
        </Tab.Navigator>
    )
}

export const createRootNavigator = (signedIn = true) => {
    return () =>
        signedIn ? (
                // User is signed in
                mainNavigation()
            ) : (
                // No token found, user isn't signed in
                authScreens(signedIn)
            )
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: 'transparent',
        shadowColor: 'transparent',
        borderWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
    },
    tabBarStyle: {
        shadowColor: 'transparent',
        borderWidth: 0,
        borderImageWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
        paddingBottom: 6,
        borderBottomColor: "transparent",
        borderTopWidth: 0,
        shadowOffset: {
            width: 0, height: 0 // for iOS
        },

    }
});
