import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import * as styleFile from './style';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Miniplayer(props) {
    const globalStyle = styleFile.default;
    let { musicInfo } = props;

    return (
        <View style={[styles.container, globalStyle.greyBg]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{uri: musicInfo.pic}} style={{ width: 60, height: 60 }} />

                <View style={{ marginLeft: 5 }}>
                    <Text style={globalStyle.whiteText}>{musicInfo.label}</Text>
                    <Text style={globalStyle.greyText}>{musicInfo.artist}</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <EvilIcons name="heart" size={30} color="white" />
                <Entypo style={{ marginLeft: 10 }} name="controller-play" size={30} color="white" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        position: 'absolute',
        bottom: 60,
        left: 10,
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})