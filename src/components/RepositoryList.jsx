import { View, Text, FlatList } from "react-native";
import repositories from "../data/repositories";
import RepositoryItem from "./RepositoryItem.jsx";

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text>&nbsp;</Text>}
      renderItem={({ item: repo }) => <RepositoryItem repo={repo} />}
    />
  );
};

export default RepositoryList;
