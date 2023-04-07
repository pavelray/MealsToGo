import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useContext,
} from "react";
import { LocationContext } from "../location/location.context";
import { resturantRequest, resturantsTransform } from "./resturants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const getRestatunts = (loc) => {
    setLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      resturantRequest(loc)
        .then(resturantsTransform)
        .then((res) => {
          setRestaurants(res);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    const locationStr = location && `${location.lat},${location.lng}`;
    getRestatunts(locationStr);
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{ restautants: restaurants, isLoading, error }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
