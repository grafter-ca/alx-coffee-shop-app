import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { CoffeeCardProps } from "@/interfaces";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useRouter } from "expo-router";

type RootStackParamList = {
  Home: undefined;
  orderDetail: { coffee: CoffeeCardProps["coffee"] }; // 👈 define expected param
};

type NavigationProp = StackNavigationProp<RootStackParamList, "orderDetail">;

const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee }) => {
  const navigation = useNavigation<NavigationProp>();
  const router = useRouter()
    const handlePress = () => {
    // navigation.navigate("orderDetail", { coffee });
    router.push(`/order_detail?coffeeId=${coffee.id}`);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        {/* Coffee Image */}
        <View style={styles.imageContainer}>
          <Image source={coffee.image} style={styles.image} />
          {/* Rating badge */}
          <View style={styles.rating}>
            <Ionicons name="star" size={12} color="#fbbf24" />
            <Text style={styles.ratingText}>{coffee.rating}</Text>
          </View>
        </View>

        {/* Content */}
        <View style={styles.info}>
          <Text style={styles.title}>{coffee.title}</Text>
          <Text style={styles.subtitle}>{coffee.subtitle}</Text>
          <View style={styles.footer}>
            <Text style={styles.price}>${coffee.price}</Text>
            <TouchableOpacity style={styles.addBtn}>
              <Ionicons name="add" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoffeeCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    width: 170,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },
  imageContainer: { position: "relative" },
  image: { width: "100%", height: 120 },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 12,
  },
  ratingText: { fontSize: 12, color: "#fff", marginLeft: 2 },
  info: { padding: 10 },
  title: { fontSize: 16, fontWeight: "bold", color: "#333" },
  subtitle: { fontSize: 13, color: "#999", marginVertical: 4 },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
  },
  price: { fontSize: 15, fontWeight: "bold", color: "#000" },
  addBtn: { backgroundColor: "#d17842", borderRadius: 8, padding: 6 },
});
