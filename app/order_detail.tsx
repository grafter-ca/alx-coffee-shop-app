import React, { useState } from "react";
import { View, Text, Image, Pressable, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StarIcon } from "react-native-heroicons/solid";
import TopNav from "@/component/layout/TopNav";
import { coffees } from "@/constants";
import { useLocalSearchParams, useRouter } from "expo-router";

const OrderDetail = () => {
  const router = useRouter()
  const params = useLocalSearchParams();
  const coffeeId = params.coffeeId; // get the coffeeId from query
  const coffee = coffees.find(c => c.id.toString() === coffeeId);

  const [selectedSize, setSelectedSize] = useState("M");
  const [expanded, setExpanded] = useState(false);


  if (!coffee) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Coffee not found</Text>
      </View>
    );
  }

  const handleBuyNow = () => {
    router.push({
      pathname: "/ordersummary",
      params: { 
        coffeeId: coffee.id.toString(),
        coffeeName: coffee.title,
        coffeePrice: coffee.price,
        coffeeSize: selectedSize
      }
    });
  };

  console.log("coffee in detail: ", coffee)
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TopNav title="Detail" />
        <Ionicons name="heart-outline" size={24} color="black" />
      </View>

      <View style={styles.imageWrapper}>
        <Image source={{ uri: coffee.image.uri }} style={styles.coffeeImage} />
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.coffeeTitle}>{coffee.title}</Text>
        <View style={styles.iconRow}>
          <Text style={styles.coffeeSubtitle}>{coffee.subtitle}</Text>
          {["cafe", "water-outline", "nutrition-outline"].map((icon, index) => (
            <View style={styles.iconBox} key={index}>
              <Ionicons name={icon as any} size={20} color="#9A6B46" />
            </View>
          ))}
        </View>

        <View style={styles.ratingRow}>
          <StarIcon color="#facc15" size={16} />
          <Text style={styles.rating}>4.8</Text>
          <Text style={styles.ratingCount}>(230)</Text>
        </View>
      </View>

      <View style={styles.descriptionSection}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.descriptionText}>
          {expanded
            ? coffee.description || "No description available."
            : `${(coffee.description || "No description available.").slice(0, 70)}...`}
          <Text style={styles.readMore} onPress={() => setExpanded(!expanded)}>
            {expanded ? " Show Less" : " Read More"}
          </Text>
        </Text>
      </View>

      <View style={styles.sizeSection}>
        <Text style={styles.sectionTitle}>Size</Text>
        <View style={styles.sizeRow}>
          {["S", "M", "L"].map(size => (
            <Pressable
              key={size}
              onPress={() => setSelectedSize(size)}
              style={[
                styles.sizeButton,
                selectedSize === size && styles.selectedSizeButton,
              ]}
            >
              <Text
                style={[
                  styles.sizeText,
                  selectedSize === size && styles.selectedSizeText,
                ]}
              >
                {size}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <View>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.price}>$ {coffee.price}</Text>
        </View>
        <Pressable style={styles.buyButton} onPress={handleBuyNow} >
          <Text style={styles.buyText}>Buy Now</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default OrderDetail;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
   errorText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
    color: "#666",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  imageWrapper: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  coffeeImage: {
    width: "100%",
    height: 220,
    borderRadius: 16,
  },
  infoSection: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  coffeeTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1f2937",
  },
  coffeeSubtitle: {
    fontSize: 14,
    color: "#9ca3af",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 12,
  },
  iconBox: {
    backgroundColor: "#fef3c7",
    padding: 8,
    borderRadius: 8,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  rating: {
    marginLeft: 4,
    fontWeight: "600",
    color: "#374151",
  },
  ratingCount: {
    marginLeft: 4,
    fontSize: 12,
    color: "#6b7280",
  },
  descriptionSection: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 6,
  },
  descriptionText: {
    fontSize: 14,
    color: "#6b7280",
  },
  readMore: {
    color: "#d97706",
    fontWeight: "600",
  },
  sizeSection: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  sizeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  selectedSizeButton: {
    backgroundColor: "#C67C4E",
    borderColor: "#C67C4E",
  },
  sizeText: {
    fontSize: 16,
    color: "#374151",
  },
  selectedSizeText: {
    color: "#fff",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 32,
    marginBottom: 24,
  },
  priceLabel: {
    fontSize: 14,
    color: "#9ca3af",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f97316",
  },
  buyButton: {
    backgroundColor: "#C67C4E",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 12,
  },
  buyText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});