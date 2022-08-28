import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native'
import React from 'react';
import * as styleFile from './utilities/style';
import { SearchNav } from './utilities/Navbar';
import { browseAll, podcast, topGenre } from './assets/search';

export default function Search() {
    const globalStyle = styleFile.default;

    return (
        <SafeAreaView style={globalStyle.container}>
            <ScrollView stickyHeaderIndices={[1]}>
                <Text style={[globalStyle.whiteText, { fontSize: 35, fontWeight: 'bold', paddingVertical: 10 }]}>Search</Text>
                <SearchNav />
                <Text style={globalStyle.header}>Your Top Genre</Text>
                {topGenre.map((item, index) => {
                    return (
                        <View key={index} style={{ marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Card pic={item.first} />
                            <Card pic={item.second} />
                        </View>
                    )
                })}

                <Text style={globalStyle.header}>Popular Podcast Categories</Text>
                {podcast.map((item, index) => {
                    return (
                        <View key={index} style={{ marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Card pic={item.first} />
                            <Card pic={item.second} />
                        </View>
                    )
                })}

                <Text style={globalStyle.header}>Browse All</Text>
                {browseAll.map((item, index) => {
                    return (
                        <View key={index} style={{ marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Card pic={item.first} />
                            <Card pic={item.second} />
                        </View>
                    )
                })}

            </ScrollView>
        </SafeAreaView>
    )
}

function Card(props) {
    let { pic } = props;
    return (
        <View style={{ width: "47%" }}>
            <Image
                resizeMode="contain"
                style={{ width: "100%", height: 110, borderRadius: 10}}
                source={pic}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    whiteText: {
        color: '#ffffff'
    }
})