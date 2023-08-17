import RecipieCard from "../../components/RecipieCard";
import ScreenWrapper from "../../components/ScreenWrapper";
import { useNavigation } from '@react-navigation/native';

export default function() {
    const navigation = useNavigation();
    return (
        <ScreenWrapper viewStyle={{ marginTop: 8 }}>
            <RecipieCard />

            <RecipieCard />

            <RecipieCard />
        </ScreenWrapper>
    );
}
