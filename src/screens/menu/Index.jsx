import { Button } from 'react-native-paper';
import ScreenWrapper from "../../components/ScreenWrapper";
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Search from "./Search";
import MyRecipes from "./MyRecipes";
import Bookmarked from "./Bookmarked";
import React from "react";

export default function() {
    const navigation = useNavigation();
    const Tab = createMaterialTopTabNavigator();

    return (
        <ScreenWrapper style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => {navigation.navigate('ShopList')}}>To ShopList</Button>

            <Tab.Navigator>
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="My recipes" component={MyRecipes} />
                <Tab.Screen name="Bookmarked" component={Bookmarked} />
            </Tab.Navigator>
        </ScreenWrapper>
    );
}
