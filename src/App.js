import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather } from "@expo/vector-icons";
import * as Screen from "./screens";
import _l from "./lib/i18n";

const HomeStack = createStackNavigator();

function Home() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Screen.HomeScreen} />
      <HomeStack.Screen name="CourseList" component={Screen.CourseListScreen} />
      <HomeStack.Screen
        name="CourseDetail"
        component={Screen.CourseDetailScreen}
      />
      <HomeStack.Screen name="Lesson" component={Screen.LessonScreen} />
      {/* <HomeStack.Screen name="Practice" component={Screen.PracticeScreen} /> */}
    </HomeStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      activeColor="#2962ff"
      inactiveColor="#e0e0e0"
      barStyle={{ backgroundColor: "#fff" }}
    >
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarLabel: _l.t("Home"),
          tabBarIcon: ({ color }) => (
            <Feather name="hexagon" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Screen.SearchScreen}
        options={{
          tabBarLabel: _l.t("Search"),
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={Screen.BookmarksScreen}
        options={{
          tabBarLabel: _l.t("Bookmarks"),
          tabBarIcon: ({ color }) => (
            <Feather name="bookmark" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Root = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName="TabNavigator">
        <Root.Screen name="Settings" component={Screen.SettingScreen} />
        <Root.Screen name="Welcome" component={Screen.WelcomeScreen} />
        <Root.Screen name="Sign in" component={Screen.SignInScreen} />
        <Root.Screen name="Sign up" component={Screen.SignUpScreen} />
        <Root.Screen name="LearningScreen" component={Screen.LearningScreen} />
        <Root.Screen name="Practice" component={Screen.PracticeScreen} />
        <Root.Screen
          options={{ headerShown: false }}
          name="TabNavigator"
          component={TabNavigator}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
}
