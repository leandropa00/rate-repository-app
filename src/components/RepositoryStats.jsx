import { View } from "react-native";
import StyledText from "./StyledText.jsx";

const parseThousands = (value) => {
  return value > 999 ? `${Math.round(value / 100) / 10}k` : String(value);
};

const RepositoryStats = ({ repo }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(repo.stargazersCount)}
        </StyledText>
        <StyledText align="center">
          Stars
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(repo.forksCount)}
        </StyledText>
        <StyledText align="center">
          Forks
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(repo.reviewCount)}
        </StyledText>
        <StyledText align="center">
          Reviews
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(repo.ratingAverage)}
        </StyledText>
        <StyledText align="center">
          Rating
        </StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;
