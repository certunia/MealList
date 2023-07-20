import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as React from "react";

export default function() {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button>lkjh</Button>
            <Button onPress={() => {console.log('Pressed'); navigation.navigate('DetailsScreen2')}}>БАТОООН2!</Button>
        </SafeAreaView>
    );
}
