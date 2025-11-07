import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Import all screens from index
import {
  HomeScreen,
  DestinationsScreen,
  HotelsScreen,
  FoodScreen,
  ProfileScreen,
  CityScreen,
  EventsScreen,
  LoginScreen,
  FavouritesScreen,
  SignupScreen
} from './screens';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Main Tab Navigator
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Destinations') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'Hotels') {
            iconName = focused ? 'bed' : 'bed-outline';
          } else if (route.name === 'Food') {
            iconName = focused ? 'restaurant' : 'restaurant-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#008751',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Destinations" component={DestinationsScreen} />
      <Tab.Screen name="Hotels" component={HotelsScreen} />
      <Tab.Screen name="Food" component={FoodScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isAuthenticated ? (
          // Auth Screens
          <>
            <Stack.Screen name="Login" options={{ headerShown: false }}>
              {(props) => <LoginScreen {...props} onLogin={() => setIsAuthenticated(true)} />}
            </Stack.Screen>
            <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
          </>
        ) : (
          // Main App
          <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
        )}
        
        {/* Common Screens */}
        <Stack.Screen name="City" component={CityScreen} options={({ route }) => ({ title: route.params?.city?.name || 'City' })} />
        <Stack.Screen name="Events" component={EventsScreen} options={{ title: 'Events' }} />
        <Stack.Screen name="Favourites" component={FavouritesScreen} options={{ title: 'Favourites' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}