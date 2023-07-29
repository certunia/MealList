import { NavigationContainer } from '@react-navigation/native'
import { PaperProvider, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { useMaterial3Theme, isDynamicThemeSupported } from '@pchmn/expo-material3-theme';
import { useColorScheme } from 'react-native';
import defaultLightTheme from './config/lightTheme'
import defaultDarkTheme from './config/darkTheme'
import { createRootNavigator } from "./router";

export default function App() {
    const colorScheme = useColorScheme();
    const { theme } = useMaterial3Theme();
    const colorsLight = isDynamicThemeSupported ? theme.light : defaultLightTheme.colors;
    const colorsDark = isDynamicThemeSupported ? theme.dark : defaultDarkTheme.colors;

    const paperTheme =
        colorScheme === 'dark'
            ? { ...MD3DarkTheme, colors: colorsDark }
            : { ...MD3LightTheme, colors: colorsLight };

    paperTheme.TextInput = {
        borderRadius: 4,
        mode: "outlined",
        style: { width: '100%' },
    }

    const Navigator = createRootNavigator();

    return (
        <PaperProvider theme={paperTheme}>
            <NavigationContainer theme={paperTheme}>
                <Navigator />
            </NavigationContainer>
        </PaperProvider>
    );
}
