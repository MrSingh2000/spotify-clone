import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import * as styleFile from './utilities/style';
import { SearchNav } from './utilities/Navbar';

export default function Search() {
    const globalStyle = styleFile.default;
    return (
        <View style={globalStyle.container}>
            <SearchNav/>
            <Text style={globalStyle.whiteText}>Search</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    whiteText: {
        color: '#ffffff'
    }
})