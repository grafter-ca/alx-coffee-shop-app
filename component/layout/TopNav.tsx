import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const TopNav = ({ title }: { title: string }) => {
  const navigation = useRouter();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.push('/(tab)/order')} style={styles.backBtn}>
        <Ionicons name="chevron-back" size={22} color="#000" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Placeholder for right space (to center title) */}
      <View style={{ width: 22 }} /> 
    </View>
  );
};

export default TopNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  backBtn: {
    padding: 4,
    borderRadius: 6,
    marginRight: 100
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    color: "#000",
    textAlign: "center",
    flex: 1,
  },
});
