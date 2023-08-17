import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = () => (
    <Card>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

        <Card.Content style={{ marginTop: 16 }}>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
    </Card>
);

export default MyComponent;
