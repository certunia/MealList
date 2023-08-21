import * as React from 'react';
import { Avatar, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default ({ navigation, ...props }) => {
    const goToDetailed = (recipe_id) => {
        navigation.navigate('RecipeDetailed', {recipe_id})
    }

    return (
        <Card onPress={() => goToDetailed(props.id)}>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}}/>

            <Card.Content style={{marginTop: 16}}>
                <Text variant="titleLarge">Card title</Text>
                <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
        </Card>
    );
}
