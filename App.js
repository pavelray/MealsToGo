/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyledSafeAreaView } from "./src/components/utils/safe-area.component";
import { Text } from "./src/components/typography/text.component";
import ResturantsScreen from "./src/features/resturants/screens/resturants.screen";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { RestaurantsContextProvider } from "./src/services/resturants/resturants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

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

function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator>
                <Tab.Screen
                  name="Resturants"
                  component={ResturantsScreen}
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
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

export default App;
