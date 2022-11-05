import { View, StyleSheet } from "react-native";
import RepositoryHeader from "./RepositoryHeader.jsx";
import RepositoryStats from "./RepositoryStats.jsx";

const RepositoryItem = ({ repo }) => {
  return (
    <View key={repo.id} style={styles.container}>
      <RepositoryHeader repo={repo}></RepositoryHeader>
      <RepositoryStats repo={repo}></RepositoryStats>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5
  }
});

export default RepositoryItem;
