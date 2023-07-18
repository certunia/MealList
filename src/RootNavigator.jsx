import * as React from 'react';
import { Platform } from 'react-native';

import { getHeaderTitle } from '@react-navigation/elements';
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import { Appbar } from 'react-native-paper';

import ExampleList, { examples } from './ExampleList';

const Stack = createStackNavigator();

export default function Root() {
    const cardStyleInterpolator =
        Platform.OS === 'android'
            ? CardStyleInterpolators.forFadeFromBottomAndroid
            : CardStyleInterpolators.forHorizontalIOS;
    return (
        <Stack.Navigator
            screenOptions={({ navigation }) => {
                return {
                    detachPreviousScreen: !navigation.isFocused(),
                    cardStyleInterpolator,
                    header: ({ navigation, route, options, back }) => {
                        const title = getHeaderTitle(options, route.name);
                        return (
                            <Appbar.Header elevated>
                                {back ? (
                                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                                ) : navigation.openDrawer ? (
                                    <Appbar.Action
                                        icon="menu"
                                        isLeading
                                        onPress={() => navigation.openDrawer()
                                        }
                                    />
                                ) : null}
                                <Appbar.Content title={title} />
                            </Appbar.Header>
                        );
                    },
                };
            }}
        >
            <Stack.Screen
                name="ExampleList"
                component={ExampleList}
                options={{
                    title: 'Examples',
                }}
            />
            {(Object.keys(examples).map((id) => {
                return (
                    <Stack.Screen
                        key={id}
                        name={id}
                        component={examples[id]}
                        options={{
                            title: examples[id].title,
                            headerShown: id !== 'themingWithReactNavigation',
                        }}
                    />
                );
            }))}
        </Stack.Navigator>
    );
}