import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react';
import * as styleFile from './utilities/style';
import art from './assets/album_art';
import topCharts from './assets/top_charts';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home() {
  const globalStyle = styleFile.default;

  const newReleases = [{
    pic: art.art7,
    label: "Catch the latest music.."
  },
  {
    pic: art.art8,
    label: "Man of The Moon"
  },
  {
    pic: art.art9,
    label: "Saade Kothe Utte"
  },
  {
    pic: art.art10,
    label: "MamaCita"
  },
  {
    pic: art.art11,
    label: "VLONE"
  },
  {
    pic: art.art12,
    label: "ONYX"
  },
  {
    pic: art.art13,
    label: "UNI"
  },
  {
    pic: art.art14,
    label: "Coming Home"
  }];

  const recentPlay = [{
    pic: art.art15,
    label: "Drive Thru"
  },
  {
    pic: art.art16,
    label: "Lutt lai giya"
  },
  {
    pic: art.art17,
    label: "Asle"
  },
  {
    pic: art.art18,
    label: "Photo"
  },
  {
    pic: art.art19,
    label: "Bachalo"
  },
  {
    pic: art.art12,
    label: "ONYX"
  },
  {
    pic: art.art13,
    label: "UNI"
  },
  {
    pic: art.art14,
    label: "Coming Home"
  }];

  return (
    <SafeAreaView style={globalStyle.container}>
      <ScrollView>
        <View style={{ flexDirection: 'row'}}>
          <Text style={[globalStyle.whiteText, {flex: 2, fontSize: 35, fontWeight: 'bold'}]}>Good Evening</Text>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
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
              <View key={index}>
                <Card1 art={item.pic} label={item.label} />
              </View>
            )
          })}
        </ScrollView>

        <Text style={[globalStyle.header, globalStyle.whiteText]}>Recently Played</Text>
        <ScrollView horizontal={true} style={{ marginHorizontal: 2 }}>
          {recentPlay.map((item, index) => {
            return (
              <View key={index}>
                <Card1 art={item.pic} label={item.label} />
              </View>
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
      <Text style={[globalStyle.greyText, {fontWeight: '400'}]}>{label}</Text>
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