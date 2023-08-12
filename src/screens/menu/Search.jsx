import { Button } from 'react-native-paper';
import ScreenWrapper from "../../components/ScreenWrapper";
import { useNavigation } from '@react-navigation/native';

export default function() {
    const navigation = useNavigation();
    return (
        <ScreenWrapper style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => {navigation.navigate('ShopList')}}>To ShopList</Button>
        </ScreenWrapper>
    );
}
