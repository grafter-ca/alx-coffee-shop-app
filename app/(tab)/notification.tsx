import { View, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const notifications = [
  { id: "1", message: "Your Cappuccino is ready!" },
  { id: "2", message: "20% off on all cold brews today." },
  { id: "3", message: "New seasonal menu launched." },
];

export default function NotificationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.message}>{item.message}</Text>
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
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 1,
  },
  message: {
    color: "#333",
    fontSize: 16,
  },
});
