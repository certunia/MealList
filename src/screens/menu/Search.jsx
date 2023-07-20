import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => {navigation.navigate('ShopList')}}>To ShopList</Button>
        </SafeAreaView>
    );
}
