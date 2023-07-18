import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { PaperProvider, Button, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { useColorScheme } from 'react-native';
import * as React from 'react';

// import App from './RootNavigator';

const Root = createStackNavigator()

function Home({ navigation }) {
    const colorScheme = useColorScheme();
    const { theme } = useMaterial3Theme();

    const paperTheme =
        colorScheme === 'dark'
            ? { ...MD3DarkTheme, colors: theme.dark }
            : { ...MD3LightTheme, colors: theme.light };

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: paperTheme.colors.primary }}>
            <Button onPress={() => {console.log(theme); navigation.navigate('DetailsScreen')}}>БАТОООН!</Button>
        </SafeAreaView>
    );
}

function DetailsScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => {console.log('Pressed'); navigation.navigate('DetailsScreen2')}}>БАТОООН2!</Button>
        </SafeAreaView>
    );
}

function DetailsScreen2({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => {console.log('Pressed'); navigation.navigate('Home')}}>БАТОООН!</Button>
        </SafeAreaView>
    );
}

export default function App() {
    const colorScheme = useColorScheme();
    const { theme } = useMaterial3Theme();
    console.log(theme)

    const paperTheme =
        colorScheme === 'dark'
            ? { ...MD3DarkTheme, colors: theme.dark }
            : { ...MD3LightTheme, colors: theme.light };

    return (
        <PaperProvider theme={paperTheme}>
            <NavigationContainer>
                <Root.Navigator>
                    <Root.Screen screenOptions={{ headerShown: false }} name="Home" component={Home} />
                    <Root.Screen headerShown={false} name="DetailsScreen" component={DetailsScreen} />
                    <Root.Screen name="DetailsScreen2" component={DetailsScreen2} />
                </Root.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
