import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const CardBodyContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const ResturantCard = styled(Card)`
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const ResurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  justify-content: space-between;
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;
