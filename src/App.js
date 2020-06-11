import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather } from "@expo/vector-icons";
import * as Screen from "./screens";

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Screen.HomeScreen} />
      <HomeStack.Screen name="Settings" component={Screen.SettingScreen} />
    </HomeStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#2962ff"
        inactiveColor="#e0e0e0"
        barStyle={{ backgroundColor: "#fff" }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Feather name="hexagon" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Screen.SearchScreen}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color }) => (
              <Feather name="search" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Bookmarks"
          component={Screen.BookmarksScreen}
          options={{
            tabBarLabel: "Bookmarks",
            tabBarIcon: ({ color }) => (
              <Feather name="bookmark" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
