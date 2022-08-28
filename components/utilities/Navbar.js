import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react';
import style, * as styleFile from './style';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import profile from "../assets/profile.png"

export function LibraryNav() {
    const globalStyle = styleFile.default;
    return (
        <View style={[styles.container, {flexDirection: 'row', alignItems: 'center', backgroundColor: 'black'}]}>
            <View style={{flex: 3, flexDirection: 'row', alignItems: 'center'}}>
                <Image borderRadius={100} style={{ width: 50, height: 50 }} source={profile} />
                <Text style={[globalStyle.whiteText, {padding: 10, fontSize: 25, fontWeight: 'bold'}]}>Your Library</Text>
            </View>
            <View style={{flex: 1,flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <AntDesign name="search1" size={30} color="white" />
                <AntDesign name="plus" size={30} color="white" />
            </View>
        </View>
    )
}

export function SearchNav() {
    const globalStyle = styleFile.default;
    return (
        <View style={[styles.container, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: 'black' }]}>
            <View style={[styles.textInputContainer, { flex: 9 }]}>
                <AntDesign name="search1" size={24} color="black" />
                <TextInput placeholder="Artists, songs or podcasts" style={styles.textInput} />
            </View>
            <FontAwesome style={{ flex: 1, marginLeft: 10 }} name="microphone" size={34} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    textInputContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 2,
        borderRadius: 5
    },
    textInput: {
        padding: 10,
        fontSize: 15,
        fontWeight: 'bold',
        width: '100%'
    },
    container: {
        padding: 2,
    },
    whiteText: {
        color: 'white'
    }
})