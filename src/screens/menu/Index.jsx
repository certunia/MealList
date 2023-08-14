import {Searchbar, Avatar, useTheme} from 'react-native-paper';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from "./Search";
import MyRecipes from "./MyRecipes";
import Bookmarked from "./Bookmarked";
import React from "react";

export default function() {
    const navigation = useNavigation();
    const Tab = createMaterialTopTabNavigator();
    const insets = useSafeAreaInsets();
    const theme = useTheme();

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);


    return (
        <>
            <View style={{
                paddingTop: insets.top,
                backgroundColor: theme.colors.background,
            }}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={{
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
    );
}
