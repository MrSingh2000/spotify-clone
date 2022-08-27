import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import * as styleFile from './style';

export function LibraryNav() {
    const globalStyle = styleFile.default;
    return (
        <View style={styles.container}>
            <Text style={globalStyle.whiteText}>LibraryNav</Text>
        </View>
    )
}

export function SearchNav() {
    const globalStyle = styleFile.default;
    return (
        <View style={styles.container}>
            <Text style={globalStyle.whiteText}>SearchNav</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        padding: 2,
    },
    whiteText: {
        color: 'white'
    }
})