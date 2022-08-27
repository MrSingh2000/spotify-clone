import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import * as styleFile from './utilities/style';
import { LibraryNav } from './utilities/Navbar';

export default function Library() {
    const globalStyle = styleFile.default;
  return (
    <View style={globalStyle.container}>
        <LibraryNav/>
      <Text style={globalStyle.whiteText}>Library</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    whiteText: {
        color: '#ffffff'
      }
})