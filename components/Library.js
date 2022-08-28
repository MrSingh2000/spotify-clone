import { StyleSheet, Text, View, SafeAreaView, ScrollView, Pressable, Image } from 'react-native'
import React from 'react';
import * as styleFile from './utilities/style';
import { LibraryNav } from './utilities/Navbar';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { singers } from './assets/singers';

export default function Library() {
  const globalStyle = styleFile.default;
  return (
    <SafeAreaView style={globalStyle.container}>

      <ScrollView stickyHeaderIndices={[0]}>
        <LibraryNav />
        <View style={{ flexDirection: 'row' }}>
          <Pressable style={styles.pressable}>
            <Text style={globalStyle.whiteText}>Playlists</Text>
          </Pressable>
          <Pressable style={styles.pressable}>
            <Text style={globalStyle.whiteText}>Artists</Text>
          </Pressable>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="swap-vertical-sharp" size={24} color="white" />
            <Text style={[globalStyle.whiteText, { marginHorizontal: 5 }]}>Recently Played</Text>
          </View>
          <MaterialCommunityIcons name="view-grid-outline" size={24} color="white" />
        </View>

        {singers.map((item, index) => {
          return (
            <View key={index}>
              <Card art={item.pic} label={item.label} />
            </View>
          )
        })}
      </ScrollView>

    </SafeAreaView>
  )
}

function Card(props) {
  let { art, label } = props;
  const globalStyle = styleFile.default;

  return (
    <View style={[styles.artCard]}>
      <Image
        borderRadius={100}
        style={styles.artImg}
        source={art}
      />
      <View style={{padding: 5}}>
        <Text style={globalStyle.whiteText}>{label}</Text>
        <Text style={globalStyle.greyText}>Artist</Text>
      </View>
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
    overflow: 'hidden',
    borderRadius: 5,
    padding: 5,
  },
  pressable: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    paddingHorizontal: 10,
    margin: 5,
  },
  whiteText: {
    color: '#ffffff'
  }
})