import * as React from 'react';
import {
    ScrollView,
    StyleSheet,
    View
} from 'react-native';

import { useTheme } from 'react-native-paper';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ScreenWrapper({children, withScrollView = true, viewStyle, contentContainerStyle, ...rest}) {
    const theme = useTheme();

    const insets = useSafeAreaInsets();

    const containerStyle = [
        styles.container,
        {
            backgroundColor: theme.colors.surface,
            paddingBottom: insets.bottom + 10,
            paddingLeft: insets.left + 16,
            paddingRight: insets.left + 16,
            gap: 16
        },
    ];

    contentContainerStyle = {
        ...contentContainerStyle,
        ...viewStyle,
        gap: 16,
    }

    return (
        <>
            {withScrollView ? (
                <ScrollView
                    {...rest}
                    contentContainerStyle={contentContainerStyle}
                    keyboardShouldPersistTaps="always"
                    alwaysBounceVertical={false}
                    showsVerticalScrollIndicator={false}
                    style={[containerStyle, styles]}
                >
                    {children}
                </ScrollView>
            ) : (
                <View style={[containerStyle, styles]}>{children}</View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
