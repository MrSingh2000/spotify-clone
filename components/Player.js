import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import * as styleFile from './utilities/style';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import art from './assets/album_art';
import audioFile from "./assets/music/audio1.mp3";
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';

export default function Player(props) {
    const globalStyle = styleFile.default;
    let { song, setSong, play, setPlay, sound, playSong, setMusicPlayer, setOpenPlayer, musicInfo, songInfo, setSongInfo, timeElapsed, setTimeElapsed } = props;

    useEffect(() => {
        let myInterval;
        // a new interval is created when song is being played and Time elapsed is updated
        if (play) {
            myInterval = setInterval(() => {
                setTimeElapsed((prevVal) => {
                    return (prevVal + 1);
                });
            }, 1000);
        }

        return () => {
            clearInterval(myInterval);
        }
    }, [play]);

    const pauseSong = async () => {
        // pause the song
        song.pauseAsync();
        setPlay(false);
    }

    const playFromPositionHandler = async (time) => {
        // the song is played from a particular timeStamp
        let data = await song.playFromPositionAsync(time * 1000);
        setTimeElapsed(time);
        setPlay(true);
    }



    return (
        <View style={[globalStyle.container, { marginTop: 0, backgroundColor: '#A2139B' }]}>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={styles.background}
                end={[0.5, 1.0]}
            />
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Pressable style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }} onPress={() => setOpenPlayer(false)}>
                    <Entypo name="chevron-thin-down" size={24} color="white" />
                </Pressable>
                <View style={{ alignItems: 'center' }}>
                    <Text style={[globalStyle.whiteText, { fontSize: 12 }]}>Now Playing</Text>
                    <Text style={[globalStyle.whiteText, { fontWeight: 'bold' }]}>{musicInfo.label}</Text>
                </View>
                <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
            </View>

            <View style={{ flexGrow: 1, alignItems: 'center' }}>
                <Image style={{ width: '90%', height: 350 }} source={{ uri: musicInfo.pic }} />
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View >
                    <Text style={[globalStyle.whiteText, { fontSize: 20, fontWeight: 'bold' }]}>
                        {musicInfo.label}
                    </Text>
                    <Text style={[globalStyle.greyText, { fontSize: 15 }]}>
                        {musicInfo.artist}
                    </Text>
                </View>
                <AntDesign name="hearto" size={24} color="black" />
            </View>

            {/* Music Slider */}
            <View style={{ flex: 1 }}>
                <Slider
                    style={{ width: "100%", height: 40 }}
                    minimumValue={0}
                    maximumValue={songInfo.totalTime}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    thumbTintColor="#fff"
                    value={timeElapsed}
                    onSlidingComplete={(val) => playFromPositionHandler(val)}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                    <Text style={globalStyle.whiteText}>{`${Math.floor(timeElapsed / 60)}:${Math.floor(timeElapsed % 60)}`}</Text>
                    <Text style={globalStyle.whiteText}>{`${Math.floor(songInfo.totalTime / 60)}:${Math.floor(songInfo.totalTime % 60)}`}</Text>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 5, alignItems: 'center' }}>
                <Ionicons name="shuffle" size={30} color="white" />
                <MaterialCommunityIcons name="skip-previous" size={30} color="white" />
                {!play ?
                    (
                        <AntDesign onPress={() => playSong("replay")} name="play" size={60} color="white" />
                    ) : (
                        <AntDesign onPress={pauseSong} name="pausecircle" size={60} color="white" />
                    )}
                <MaterialCommunityIcons name="skip-next" size={30} color="white" />
                <Ionicons name="repeat" size={30} color="white" />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 700,
    },
})