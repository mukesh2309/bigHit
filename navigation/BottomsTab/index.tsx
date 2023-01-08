import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icons from "../../assets/bottomTabIcons";
import { bottomsTabActive, bottomsTabInactive } from "../../constants";
import { BlankScreen, Home } from "../../screens";

const Tab = createBottomTabNavigator();

export const BottomsTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: bottomsTabActive,
        tabBarInactiveTintColor: bottomsTabInactive,
        tabBarStyle: { height: "10%" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarIcon: ({ color }) => <Icons.Home fill={color} /> }}
      />
      <Tab.Screen
        name="Videos"
        component={BlankScreen}
        options={{ tabBarIcon: ({ color }) => <Icons.Videos fill={color} /> }}
      />
      <Tab.Screen
        name="Rankings"
        component={BlankScreen}
        options={{ tabBarIcon: ({ color }) => <Icons.Rankings fill={color} /> }}
      />
      <Tab.Screen
        name="Profile"
        component={BlankScreen}
        options={{ tabBarIcon: ({ color }) => <Icons.Profile fill={color} /> }}
      />
      <Tab.Screen
        name="Notifications"
        component={BlankScreen}
        options={{
          tabBarIcon: ({ color }) => <Icons.Notifications fill={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
