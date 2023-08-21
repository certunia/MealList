import { Checkbox, List, Menu, Text } from 'react-native-paper';
import { useState } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";


export default function({ navigation }) {
    const [menuVisible, setMenuVisible] = useState(false);
    const [todos, setTodos] = useState([
        { id: 1, text: 'Buy groceries', checked: false },
        { id: 2, text: 'Go to the gym', checked: true },
        // Add more todos as needed
    ]);

    const handleToggleTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        );
    };

    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    const handleDelete = () => {
        setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== item.id));
        closeMenu();
    };

    const [contextualMenuCoord, setContextualMenuCoord] = useState({ x: 0, y: 0 });

    const _handleLongPress = (event) => {
        const { nativeEvent } = event;

        setContextualMenuCoord({
            x: nativeEvent.pageX,
            y: nativeEvent.pageY,
        });

        openMenu();
    };

    return (
        <ScreenWrapper viewStyle={{ marginTop: 8 }}>
            <Menu
                visible={menuVisible}
                onDismiss={closeMenu}
                anchorPosition={'bottom'}
                anchor={contextualMenuCoord}
            >
                <Menu.Item onPress={handleDelete} title="Delete" />
                <Menu.Item onPress={closeMenu} title="Cancel" />
            </Menu>
            <List.Item
                title={'Item first'}
                left={() => (
                    <Checkbox
                        status={true ? 'checked' : 'unchecked'}
                        onPress={() => handleToggleTodo(1)}
                    />
                )}
                onLongPress={_handleLongPress}
            />
        </ScreenWrapper>
    );
}
