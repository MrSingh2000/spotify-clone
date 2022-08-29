import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Home from './components/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './components/Search';
import Library from './components/Library';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from "@env";
import Player from './components/Player';
import { useState } from 'react';
import Miniplayer from './components/utilities/Miniplayer';
import { Audio } from 'expo-av';

const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

export default function App() {
  const [musicPlayer, setMusicPlayer] = useState(false);
  const [openPlayer, setOpenPlayer] = useState(false);
  const [musicInfo, setMusicInfo] = useState(null);


  // SOME SONG RELATED STATED
  const [song, setSong] = useState();
  const [play, setPlay] = useState(false);
  const [songInfo, setSongInfo] = useState({
    name: "unknown",
    artist: "unknown",
    totalTime: 0,
    timeRemaining: 0
  });
  const [timeElapsed, setTimeElapsed] = useState(0);

  const sound = new Audio.Sound();
  const playSong = async (itemUrl) => {
    setPlay(true);
    // if new song is played, first it will be loaded
    if ((!song || musicInfo?.url !== itemUrl) && itemUrl !== "replay") {
      setSongInfo({
        name: "unknown",
        artist: "unknown",
        totalTime: 0,
        timeRemaining: 0
      });
      if (musicInfo?.url !== itemUrl && song) {
        await song.pauseAsync();
        await song.unloadAsync();
      }
      await sound.loadAsync({ uri: itemUrl });
      await sound.playAsync();
      setSong(sound);
      let info = await sound.getStatusAsync();
      setSongInfo({
        ...songInfo,
        totalTime: info.durationMillis / 1000,
        timeRemaining: info.playableDurationMillis / 1000
      });
      setTimeElapsed(0);
    }
    // if the song is already loaded and is played from paused state
    else if (song) {
      await song.playAsync();
    }

  }

  return openPlayer ? (
    <Player timeElapsed={timeElapsed} setTimeElapsed={setTimeElapsed} songInfo={songInfo} setSongInfo={setSongInfo} play={play} setPlay={setPlay} song={song} setSong={setSong} sound={sound} playSong={playSong} setMusicPlayer={setMusicPlayer} setOpenPlayer={setOpenPlayer} musicInfo={musicInfo} />
  ) : (
    <>
      <NavigationContainer style={styles.main}>
        <Tab.Navigator sceneContainerStyle={{
          backgroundColor: 'black',
        }} screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: 'black'
          },
          header: (props) => { return null }
        }}>

          <Tab.Screen name="Home" options={{
            tabBarIcon: ({ focused }) => (
              <Foundation name="home" size={24} color={`${focused ? 'white' : 'grey'}`} />
            )
          }}>
            {(props) => <Home {...props} musicPlayer={musicPlayer} setMusicInfo={setMusicInfo} setMusicPlayer={setMusicPlayer} playSong={playSong} song={song} setSong={setSong} />}
          </Tab.Screen>

          <Tab.Screen name="Search" options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign name="search1" size={24} color={`${focused ? 'white' : 'grey'}`} />
            )
          }} >
            {(props) => <Search {...props} musicPlayer={musicPlayer} setMusicPlayer={setMusicPlayer} />}
          </Tab.Screen>

          <Tab.Screen name="Library" options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons name="library-sharp" size={24} color={`${focused ? 'white' : 'grey'}`} />
            )
          }}>
            {(props) => <Library {...props} musicPlayer={musicPlayer} setMusicPlayer={setMusicPlayer} />}
          </Tab.Screen>

          {/* <Tab.Screen name="Player" style={{ display: "none" }} options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons name="library-sharp" size={24} color={`${focused ? 'white' : 'grey'}`} />
            )
          }}>
            {(props) => <Player {...props} musicPlayer={musicPlayer} setMusicPlayer={setMusicPlayer} />}
          </Tab.Screen> */}

        </Tab.Navigator>
        {musicPlayer ? (
          <Pressable onPress={() => setOpenPlayer(true)}>
            <Miniplayer musicInfo={musicInfo} />
          </Pressable>
        ) : null}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    color: 'white'
  },
});
