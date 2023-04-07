import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import ResturantsScreen from "../../features/resturants/screens/resturants.screen";
import RestaurantDetailScreen from "../../features/resturants/screens/restaurantDetail.screen";

const ResturantStack = createStackNavigator();
const ResturantNavigator = () => {
  return (
    <ResturantStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
    >
      <ResturantStack.Screen name="Restaurants" component={ResturantsScreen} />
      <ResturantStack.Screen
        name="Restaurant Details"
        component={RestaurantDetailScreen}
      />
    </ResturantStack.Navigator>
  );
};

export default ResturantNavigator;
