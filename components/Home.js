import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Pressable } from 'react-native'
import React from 'react';
import * as styleFile from './utilities/style';
import art from './assets/album_art';
import topCharts from './assets/top_charts';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Player from './Player';

export default function Home(props) {
  const globalStyle = styleFile.default;
  let { musicPlayer, setMusicPlayer, setMusicInfo, playSong, song, setSong } = props;

  const newReleases = [{
    pic: art.art7,
    label: "Catch the latest music..",
    artist: "Nobody",
    url: "https://mrsingh2000.blob.core.windows.net/spotifyclone/city%20of%20gold%20nirvair%20pannu.mp3"
  },
  {
    pic: art.art8,
    label: "Man of The Moon",
    artist: "Guru Randhawa",
    url: "https://mrsingh2000.blob.core.windows.net/spotifyclone/Rona%20Rona%20_%20Guru%20Randhawa.mp3",
  },
  {
    pic: art.art9,
    label: "Saade Kothe Utte",
    artist: "Ammy Virk",
    url: "https://mrsingh2000.blob.core.windows.net/spotifyclone/Saade%20Kothe%20Utte%20%20Saunkan%20Saunkne%20Song%20%20Ammy%20Virk%20%20Nimrat%20Khaira%20%20Bunty%20Bains.mp3"
  },
  {
    pic: art.art10,
    label: "MamaCita",
    artist: "Nobody",
    url: "https://mrsingh2000.blob.core.windows.net/spotifyclone/02%20Mamacita%20(ft%20Rich%20Homie%20Quan%20&%20Young%20Thug).mp3"
  },
  {
    pic: art.art11,
    label: "VLONE",
    artist: "Nobody",
    url: "https://mrsingh2000.blob.core.windows.net/spotifyclone/Ready%20Set%20Go%20(VLone)%20Produced%20By%20DP%20Beatz.mp3"
  },
  {
    pic: art.art12,
    label: "ONYX",
    artist: "Anonymous",
    url: "https://mrsingh2000.blob.core.windows.net/spotifyclone/Ready%20Set%20Go%20(VLone)%20Produced%20By%20DP%20Beatz.mp3"
  },
  {
    pic: art.art13,
    label: "UNI",
    artist: "Ranjit Bawa",
    url: "https://mrsingh2000.blob.core.windows.net/spotifyclone/Lutt%20Lai%20Giya%20Ranjit%20Bawa.mp3"
  },
  {
    pic: art.art14,
    label: "Coming Home",
    artist: "Nobody",
    url: "https://mrsingh2000.blob.core.windows.net/spotifyclone/Lutt%20Lai%20Giya%20Ranjit%20Bawa.mp3"
  }];

  const recentPlay = [{
    pic: art.art15,
    label: "Drive Thru",
    artist: "Diljit Dosanjh",
    url: "https://mrsingh2000.blob.core.windows.net/spotifyclone/VANILLA%20-%20Diljit%20Dosanjh%20[Drive%20Thru].mp3"
  },
  {
    pic: art.art16,
    label: "Lutt lai giya",
    artist: "Ranjit Bawa",
    url: "https://mrsingh2000.blob.core.windows.net/spotifyclone/Lutt%20Lai%20Giya%20Ranjit%20Bawa.mp3"
  },
  {
    pic: art.art17,
    label: "Asle",
    artist: "Nirvair Pannu",
    url: "https://mrsingh2000.blob.core.windows.net/spotifyclone/Saade%20Kothe%20Utte%20%20Saunkan%20Saunkne%20Song%20%20Ammy%20Virk%20%20Nimrat%20Khaira%20%20Bunty%20Bains.mp3"
  },
  {
    pic: art.art18,
    label: "Photo",
    artist: "Singga",
    url: "https://mrsingh2000.blob.core.windows.net/spotifyclone/Photo.mp3"
  },
  {
    pic: art.art19,
    label: "Bachalo",
    artist: "Akhil",
    url: "https://mrsingh2000.blob.core.windows.net/spotifyclone/Photo.mp3"
  },
  {
    pic: art.art12,
    label: "ONYX",
    artist: "Nobody",
    url: "https://mrsingh2000.blob.core.windows.net/spotifyclone/Ready%20Set%20Go%20(VLone)%20Produced%20By%20DP%20Beatz.mp3"
  },
  {
    pic: art.art13,
    label: "UNI",
    artist: "Ranjit Bawa",
    url: "https://mrsingh2000.blob.core.windows.net/spotifyclone/Lutt%20Lai%20Giya%20Ranjit%20Bawa.mp3"
  },
  {
    pic: art.art14,
    label: "Coming Home",
    artist: "Nobody",
    url: "https://mrsingh2000.blob.core.windows.net/spotifyclone/Lutt%20Lai%20Giya%20Ranjit%20Bawa.mp3",
  }];

  return (
    <SafeAreaView style={globalStyle.container}>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[globalStyle.whiteText, { flex: 2, fontSize: 35, fontWeight: 'bold' }]}>Good Evening</Text>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Ionicons name="notifications-outline" size={24} color="white" />
            <MaterialIcons name="replay" size={24} color="white" />
            <Ionicons name="settings-outline" size={24} color="white" />
          </View>
        </View>

        <View>
          <View style={styles.artContainer}>
            <Card art={art.art1} label="Go Away Now" />
            <Card art={art.art2} label="Fiver latest" />
          </View>
          <View style={styles.artContainer}>
            <Card art={art.art3} label="Wind chills" />
            <Card art={art.art4} label="Vanilla" />
          </View>
          <View style={styles.artContainer}>
            <Card art={art.art5} label="Punjabi 101" />
            <Card art={art.art6} label="Old stand" />
          </View>
        </View>

        <Text style={[globalStyle.header, globalStyle.whiteText]}>New Releases for you</Text>
        <ScrollView horizontal={true} style={{ marginHorizontal: 2 }}>
          {newReleases.map((item, index) => {
            return (
              <Pressable key={index} onPress={async () => {
                await song.pauseAsync();
                setSong();
                setMusicInfo({
                  pic: item.pic,
                  label: item.label,
                  url: item.url,
                  artist: item.artist
                });
                setMusicPlayer(true);
                playSong(item.url);
              }}>
                <Card1 art={item.pic} label={item.label} />
              </Pressable>
            )
          })}
        </ScrollView>

        <Text style={[globalStyle.header, globalStyle.whiteText]}>Recently Played</Text>
        <ScrollView horizontal={true} style={{ marginHorizontal: 2 }}>
          {recentPlay.map((item, index) => {
            return (
              <Pressable key={index} onPress={() => {
                setMusicInfo();
                setMusicInfo({
                  pic: item.pic,
                  label: item.label,
                  url: item.url,
                  artist: item.artist
                });
                setMusicPlayer(true);
                playSong(item.url);
              }}>
                <Card1 art={item.pic} label={item.label} />
              </Pressable>
            )
          })}
        </ScrollView>

        <Text style={[globalStyle.header, globalStyle.whiteText]}>Charts</Text>
        <ScrollView horizontal={true} style={{ marginHorizontal: 2 }}>
          {topCharts.map((item, index) => {
            return (
              <View key={index}>
                <Card1 art={item.pic} label={item.label} />
              </View>
            )
          })}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

function Card(props) {
  let { art, label } = props;
  const globalStyle = styleFile.default;

  return (
    <View style={[styles.artCard, globalStyle.greyBg]}>
      <Image
        style={styles.artImg}
        source={art}
      />
      <Text style={styles.artText}>{label}</Text>
    </View>
  )

}

function Card1(props) {
  let { art, label } = props;
  const globalStyle = styleFile.default;

  return (
    <View style={{ flexDirection: 'column', overflow: 'hidden', padding: 2, alignItems: 'center' }}>
      <Image
        style={{ width: 150, height: 150 }}
        source={art}
      />
      <Text style={[globalStyle.greyText, { fontWeight: '400' }]}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  artImg: {
    width: 60,
    height: 60,
  },
  artCard: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    overflow: 'hidden',
    borderRadius: 5,
  },
  artText: {
    color: 'white',
    padding: 5,
    fontWeight: 'bold'
  },
  artContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 3,
  }
});