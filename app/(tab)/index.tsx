import CoffeeContainer from "@/component/coffee/CoffeeContainer";
import Banner from "@/component/common/Banner";
import LocationDropdown from "@/component/common/LocationSelector";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <ScrollView>
      <View style={styles.header}>
        {/* loaction dropdown componwnt here */}
       <LocationDropdown />

        {/* Search Row */}
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Ionicons name="search" size={20} color="#aaa" />
            <TextInput
              placeholder="Search coffee"
              placeholderTextColor="#aaa"
              style={styles.searchInput}
              underlineColorAndroid="transparent"
            />
          </View>

          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="options" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <Banner />
        <CoffeeContainer />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f5f2",
  },
  content: {
    marginTop: -100,
    alignItems: "center",
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6F4E37",
    marginTop: 16,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginTop: 8,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#6F4E37",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginTop: 24,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  header: {
    backgroundColor: "#1c1c1c",
    padding: 20,
    height: 250,
  },
  locationLabel: {
    fontSize: 14,
    color: "#aaa",
  },
  locationText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 8,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2a2a2a",
    borderRadius: 12,
    paddingHorizontal: 10,
    height: 45,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: "#fff",
    paddingVertical: 0, 
    borderWidth: 0, 
    includeFontPadding: false,
  },
  filterBtn: {
    backgroundColor: "#d17842",
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: 45,
  },
});
