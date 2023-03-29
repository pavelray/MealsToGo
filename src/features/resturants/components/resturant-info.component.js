import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  Address,
  CardBodyContainer,
  Icon,
  Rating,
  RatingContainer,
  ResturantCard,
  ResurantCardCover,
  StatusContainer,
} from "./resturant-info.styles";

const ResturantInfoCard = ({ restaurant = {} }) => {
  const { item } = restaurant;
  const {
    name,
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdHVyYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    ],
    address = "100 Some Random Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = item;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <ResturantCard>
      <ResurantCardCover source={{ uri: photos[0] }} />
      <CardBodyContainer>
        <Text>{name}</Text>
        <RatingContainer>
          <Rating>
            {ratingArray.map((r, i) => (
              <SvgXml width="20" height="20" xml={star} key={i} />
            ))}
          </Rating>
          <StatusContainer>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml width="20" height="20" xml={open} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </StatusContainer>
        </RatingContainer>
        <Address>{address}</Address>
      </CardBodyContainer>
    </ResturantCard>
  );
};

export default ResturantInfoCard;
