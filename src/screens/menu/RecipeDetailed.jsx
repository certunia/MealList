import RecipieCard from "../../components/RecipieCard";
import ScreenWrapper from "../../components/ScreenWrapper";
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-paper';

export default function() {
    return (
        <ScreenWrapper viewStyle={{ marginTop: 8 }}>
            <Text>
                Yay, it works!
            </Text>
        </ScreenWrapper>
    );
}
