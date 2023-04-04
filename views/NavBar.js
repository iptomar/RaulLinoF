import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from 'react-native';

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

function NavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            
            // TODO: Voltar aqui mais tarde para mudar o icon que está selecionado
            switch(rn){
              case homeName: iconName = focused ? HomeIcon : HomeIcon; break;
              case bioName: iconName = focused ? BioIcon : BioIcon; break;
              case mapName: iconName = focused ? MapIcon : MapIcon; break;
              case arName: iconName = focused ? ARIcon : ARIcon; break;
            }

            // NOTE: Imagem ainda não funciona
            return <Image source={require(iconName)}></Image>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeView} />
        <Tab.Screen name={bioName} component={BioView} />
        <Tab.Screen name={mapName} component={MapView} />
        <Tab.Screen name={arName} component={ARView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavBar;