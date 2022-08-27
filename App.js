import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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

const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

export default function App() {
  // userAuth();
  // oAuth();

  return (
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
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({ focused }) => (
            <Foundation name="home" size={24} color={`${focused ? 'white' : 'grey'}`} />
          )
        }} />
        <Tab.Screen name="Search" component={Search} options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign name="search1" size={24} color={`${focused ? 'white' : 'grey'}`} />
          )
        }} />
        <Tab.Screen name="Library" component={Library} options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="library-sharp" size={24} color={`${focused ? 'white' : 'grey'}`} />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    color: 'white'
  },
});
