import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Views
import HomeView from './Home';
import BioView from './Bio';
import MapView from './map/Map';
import ARView from './ar/AR';

// View Names
const homeName = "Home";
const bioName = "Bio";
const mapName = "Map";
const arName = "AR";

// View Icons
import HomeIcon from '../data/img/navbar/nav_homeIcon.svg';
import BioIcon from '../data/img/navbar/nav_bioIcon.svg';
import MapIcon from '../data/img/navbar/nav_mapIcon.svg';
import ARIcon from '../data/img/navbar/nav_arIcon.svg';

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return(
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        "tabBarShowLabel": false,
        "tabBarActiveBackgroundColor": "#ccae35",
        "tabBarInactiveBackgroundColor": "white",
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]
      }}
      >
        <Tab.Screen 
        name="Home" 
        component={HomeView} 
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon width="50" height="50" color="#00ff00"/>
          )
        }}
        />
        <Tab.Screen 
        name="Bio" 
        component={BioView} 
        options={{
          tabBarIcon: ({focused}) => (
              <BioIcon width="50" height="50"/>
            )
        }}
        />
        <Tab.Screen 
        name="Mapa" 
        component={MapView} 
        options={{
          tabBarIcon: ({focused}) => (
            <MapIcon width="50" height="50"/>
          )
        }}
        />
        <Tab.Screen name="RA"
        component={ARView} 
        options={{
          tabBarIcon: ({focused}) => (
            <ARIcon width="50" height="50"/>
          )
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}