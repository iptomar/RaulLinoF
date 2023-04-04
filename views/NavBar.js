// NOTE: WIP
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Views
import HomeView from './views/Home';
import BioView from './views/Bio';
import MapView from './views/map/Map';
import ARView from './views/ar/AR';

// View names
const homeName = "Página Principal";
const bioName = "Biografia";
const mapName = "Mapa Interativo";
const arName = "Realidade Aumentada";

// View Icons
import HomeIcon from './data/img/navbar/nav_homeIcon';
import BioIcon from './data/img/navbar/nav_bioIcon';
import MapIcon from './data/img/navbar/nav_mapIcon';
import ARIcon from './data/img/navbar/nav_arIcon';

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
              case 'homeName': iconName = focused ? HomeIcon : HomeIcon; break;
              case 'bioName': iconName = focused ? BioIcon : BioIcon; break;
              case 'mapName': iconName = focused ? MapIcon : MapIcon; break;
              case 'arName': iconName = focused ? ARIcon : ARIcon; break;
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
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