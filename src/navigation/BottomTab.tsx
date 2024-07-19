import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Surfing from '../screens/Surfing';
import Hula from '../screens/Hula';
import Vulcano from '../screens/Vulcano';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Surfing') {
            iconName = 'surfing';
          } else if (route.name === 'Hula') {
            iconName = 'nightlife';
          } else {
            iconName = 'landscape';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: ({focused, color}) => {
          return (
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  color,
                  marginBottom: 5,
                  fontWeight: focused ? 'bold' : 'normal',
                }}>
                {route.name}
              </Text>
              {focused && (
                <View
                  style={{
                    height: 3,
                    backgroundColor: '#008080',
                    width: '100%',
                    marginBottom: 3,
                  }}
                />
              )}
            </View>
          );
        },
        tabBarActiveTintColor: '#008080',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingVertical: 5,
          height: 60,
        },
        headerTitleAlign: 'center',
        headerStyle: {
          height: 70,
        },
        headerTitleStyle: {
          fontSize: 35,
          fontFamily: 'cursive',
          fontWeight: 'bold',
        },
      })}>
      <Tab.Screen
        options={{
          headerTitle: 'Aloha',
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerTitle: 'Aloha',
        }}
        name="Surfing"
        component={Surfing}
      />
      <Tab.Screen name="Hula" component={Hula} />
      <Tab.Screen name="Vulcano" component={Vulcano} />
    </Tab.Navigator>
  );
}
