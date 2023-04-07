import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyledSafeAreaView } from "../../components/utils/safe-area.component";
import { Text } from "react-native-paper";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import ResturantNavigator from "./resturants.navigator";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <StyledSafeAreaView>
      <Text>Settings!</Text>
    </StyledSafeAreaView>
  );
}
function MapsScreen() {
  return (
    <StyledSafeAreaView>
      <Text>Maps!</Text>
    </StyledSafeAreaView>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Resturants"
          component={ResturantNavigator}
          options={{
            tabBarLabel: "Resturants",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="silverware"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Maps"
          component={MapsScreen}
          options={{
            tabBarLabel: "Maps",
            tabBarIcon: ({ color, size }) => (
              <Feather name="map-pin" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, size }) => (
              <Feather name="settings" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
