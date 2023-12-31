import {Searchbar, useTheme} from 'react-native-paper';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from "./Search";
import MyRecipes from "./MyRecipes";
import RecipeDetailed from "./RecipeDetailed";
import Bookmarked from "./Bookmarked";
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

function SearchScreens() {
    const Tab = createMaterialTopTabNavigator();
    const insets = useSafeAreaInsets();
    const theme = useTheme();
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <>
            <View style={{
                paddingTop: insets.top,
                backgroundColor: theme.colors.elevation.level1,
            }}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={{
                        backgroundColor: theme.colors.surfaceDisabled,
                        marginTop: 16,
                        paddingRight: 16,
                        marginBottom: 8,
                        marginLeft: 16,
                        marginRight: 16,
                    }}
                    right={() => (
                        <Icon name="account-circle-outline" size={30} color={theme.colors.onSurface}/>
                    )}
                />
            </View>

            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: theme.colors.primary,
                    tabBarInactiveTintColor: theme.colors.onSurface,
                    tabBarLabelStyle: { fontWeight: 600 },
                }}
            >
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="My recipes" component={MyRecipes} />
                <Tab.Screen name="Bookmarked" component={Bookmarked} />
            </Tab.Navigator>
        </>
    )
}

export default function() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SearchScreens"
                component={SearchScreens}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="RecipeDetailed"
                component={RecipeDetailed}
            />
        </Stack.Navigator>
    );
}
