import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import PrimaryButton from "../../components/PrimaryButton";
import ScreenWrapper from "../../components/ScreenWrapper";
import { View } from 'react-native';
import * as React from "react";

export default function() {
    const [hidePass, setHidePass] = React.useState(true);
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    const theme = useTheme();

    return (
        <ScreenWrapper viewStyle={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
            <View></View>

            <View style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <TextInput
                    mode="outlined"
                    value={email}
                    onChangeText={email => setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    label="Email"
                    style={{ width: '100%' }}
                />
                <TextInput
                    label="Password"
                    returnKeyType="next"
                    mode="outlined"
                    value={password}
                    secureTextEntry={hidePass}
                    onChangeText={password => setPassword(password)}
                    right={
                        <TextInput.Icon icon="eye" onPress={() => setHidePass(!hidePass)} />
                    }
                />
                <Button
                    onPress={() => {console.log('Login')}}
                    style={{ alignSelf: 'flex-end', padding: 0, margin: 0 }}
                    contentStyle={{ padding: 0, margin: 0 }}
                >
                    Forgot password?
                </Button>

                <PrimaryButton
                    onPress={() => {console.log('Login')}}
                >
                    Login
                </PrimaryButton>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                <Text>
                    Don't have an account?
                </Text>
                <Button
                    onPress={() => {console.log('Login')}}
                >
                    Signup
                </Button>
            </View>
        </ScreenWrapper>
    );
}
