import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCustomStateReducer } from '../hooks/useCustomStateReducer';

export default function TestScreen() {
    const initialState = { count: 0, username: 'guest' };
    const [state, updateState, resetState] = useCustomStateReducer(initialState);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Count: {state.count}</Text>
            <Text style={styles.subtitle}>Username: {state.username}</Text>

            <Button title='Increase Count' onPress={() => updateState({ count: state.count + 1 })} />
            <Button title='Change username' onPress={() => updateState({ username: 'BRO' })} />
            <Button title='Reset State' onPress={resetState} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        gap: 12,
    },
    title: {
        fontSize: 24,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 16,
    },
});