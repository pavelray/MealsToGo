import React, { useContext } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { FlatList, TouchableOpacity } from "react-native";
import ResturantInfoCard from "../components/resturant-info.component";
import { StyledSafeAreaView } from "../../../components/utils/safe-area.component";
import { RestaurantsContext } from "../../../services/resturants/resturants.context";
import Search from "../components/search.component";

const ResturantsScreen = ({ navigation }) => {
  const { restautants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <StyledSafeAreaView>
      <Search />
      {isLoading && (
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      )}
      {!isLoading && (
        <FlatList
          data={restautants}
          renderItem={(item, index) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Restaurant Details", { restaurant: item })
              }
            >
              <ResturantInfoCard restaurant={item} key={index} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{ padding: 16, marginTop: 16 }}
        />
      )}
    </StyledSafeAreaView>
  );
};

export default ResturantsScreen;
