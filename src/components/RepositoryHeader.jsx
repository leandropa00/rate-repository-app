import { View, Image, StyleSheet } from "react-native";
import StyledText from "./StyledText.jsx";
import theme from "../theme.js";

const RepositoryHeader = ({ repo }) => {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image
          style={styles.image}
          source={{ uri: repo.ownerAvatarUrl }}
        ></Image>
      </View>
      <View style={{ flex: 1 }}>
        <StyledText fontWeight="bold">
          {repo.fullName}
        </StyledText>
        <StyledText color="secondary">{repo.description}</StyledText>
        <StyledText style={styles.language}>{repo.language}</StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    marginVertical: 4,
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
});

export default RepositoryHeader;
