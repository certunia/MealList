import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaInsetsContext, SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PaperProvider, Button } from 'react-native-paper';
import * as React from 'react';
import { View, Text } from 'react-native';

// import App from './RootNavigator';

const Drawer = createDrawerNavigator();

function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => console.log('Pressed')}>БАТОООН!</Button>
        </View>
    );
}

function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

export default function App() {
    const [collapsed, setCollapsed] = React.useState(false);

    return (
        <PaperProvider>
            <NavigationContainer>
                <SafeAreaInsetsContext.Consumer>
                    {(insets) => {
                        const { left, right } = insets || { left: 0, right: 0 };
                        const collapsedDrawerWidth = 80 + Math.max(left, right);
                        return (
                            <Drawer.Navigator
                                useLegacyImplementation={true}
                                screenOptions={{
                                    drawerStyle: collapsed && {
                                        width: collapsedDrawerWidth,
                                    },
                                }}
                                drawerContent={() => <Button>БАТОООН!</Button>}
                            >
                                <Drawer.Screen
                                    name="Home"
                                    component={Home}
                                    options={{ headerShown: false }}
                                />
                            </Drawer.Navigator>
                        );
                    }}
                </SafeAreaInsetsContext.Consumer>
            </NavigationContainer>
        </PaperProvider>
    );
}
