import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => {navigation.navigate('Home')}}>To Home</Button>
        </SafeAreaView>
    );
}
