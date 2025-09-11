import { View, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const reviews = [
  { id: "1", user: "Alice", review: "Best cappuccino in town!" },
  { id: "2", user: "John", review: "Loved the iced latte, super refreshing." },
  { id: "3", user: "Maria", review: "Friendly staff and cozy atmosphere." },
];

export default function ReviewScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Customer Reviews</Text>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.user}>{item.user}</Text>
            <Text style={styles.review}>{item.review}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#6F4E37",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#f9f5f2",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  user: {
    fontWeight: "600",
    color: "#6F4E37",
    marginBottom: 4,
  },
  review: {
    color: "#444",
  },
});
