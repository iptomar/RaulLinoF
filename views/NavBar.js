import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Views
import HomeView from './Home';
import DetailsView from './Details';
import BioView from './Bio';
import MapView from './map/Map';
import ARView from './ar/AR';
import ARDetailsView from './ar/ARDetails';
import HistoryView from './map/History';
import MarkersView from './map/MarkersIt'; 
import Aboutus from './Aboutus';

// View Names
const homeName = "Home";
const detailsName = "Details";
const bioName = "Bio";
const mapName = "Map";
const arName = "AR";

// View Icons
import HomeIcon from '../data/img/navbar/nav_homeIcon.svg';
import BioIcon from '../data/img/navbar/nav_bioIcon.svg';
import MapIcon from '../data/img/navbar/nav_mapIcon.svg';
import ARIcon from '../data/img/navbar/nav_arIcon.svg';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation(){
  return(
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
  );
}

const HomeStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name='Locais' component={HomeView} />
      <Stack.Screen options={{headerShown: false}} name='Detalhes' component={DetailsView} />
      <Stack.Screen name="Aboutus" component={Aboutus} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

const ARStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name='AR' component={ARView} />
      <Stack.Screen options={{headerShown: false}} name='ARDetails' component={ARDetailsView} />
    </Stack.Navigator>
  )
}

const MapStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name='Map' component={MapView} />
      <Stack.Screen options={{headerShown: false}} name='Markers' component={MarkersView} />
      <Stack.Screen options={{headerShown: false}} name='History' component={HistoryView} />
    </Stack.Navigator>
  )
}

export function NavBar() {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: "#ccae35",
          tabBarInactiveBackgroundColor: "white",
          headerShown: false,
        }}
      >
        <Tab.Screen 
          name="Raul Lino" 
          component={HomeStack} 
          options={{
            tabBarIcon: ({ focused }) => (
              <HomeIcon width="50" height="50" color="#00ff00"/>
            )
          }}
        />
        <Tab.Screen 
          name="Biografia" 
          component={BioView} 
          options={{
            tabBarIcon: ({ focused }) => (
              <BioIcon width="50" height="50"/>
            )
          }}
        />
        <Tab.Screen jpg
        name="Mapa" 
        component={MapStack} 
        options={{
          tabBarIcon: ({focused}) => (
            <MapIcon width="50" height="50"/>
          )
        }}
        />
        <Tab.Screen 
          name="Realidade Aumentada"
          component={ARStack} 
          options={{
            tabBarIcon: ({ focused }) => (
              <ARIcon width="50" height="50"/>
            )
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
