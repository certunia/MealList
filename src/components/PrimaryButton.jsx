import { Button, useTheme } from 'react-native-paper';

export default function({ children, ...rest }) {
    const theme = useTheme();

    return (
        <Button
            mode="contained"
            textColor={theme.colors.onSurface}
            buttonColor={theme.colors.primaryContainer}
            {...rest}
        >
            Login
        </Button>
    );
}
