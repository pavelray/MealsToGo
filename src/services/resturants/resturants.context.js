import React, { useState, createContext, useEffect, useMemo } from "react";
import { resturantRequest, resturantsTransform } from "./resturants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRestatunts = () => {
    setLoading(true);
    setTimeout(() => {
      resturantRequest()
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
    getRestatunts();
  }, []);
  return (
    <RestaurantsContext.Provider
      value={{ restautants: restaurants, isLoading, error }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
