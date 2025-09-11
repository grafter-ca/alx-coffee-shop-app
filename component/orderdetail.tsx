import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StarIcon } from "react-native-heroicons/solid";
import TopNav from "@/component/layout/TopNav";
import { coffees } from "@/constants";
import { Coffee } from "@/interfaces";

const OrderDetail = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [expanded, setExpanded] = useState(false);
  const [coffeeDetail, setCoffeeDetail] = useState<Coffee[]>([]);

  useEffect(() => {
    setCoffeeDetail(coffees);
  }, []);

  const description =
    "A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the foam.";

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TopNav title="Detail" />
        <Ionicons name="heart-outline" size={24} color="black" />
      </View>

      {/* Coffee Image */}
      <View style={styles.imageWrapper}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
          }}
          style={styles.coffeeImage}
        />
      </View>

      {/* Coffee Info */}
      <View style={styles.infoSection}>
        <Text style={styles.coffeeTitle}>Caffe Mocha</Text>
        {/* Icons row */}
        <View style={styles.iconRow}>
          <Text style={styles.coffeeSubtitle}>Ice/Hot</Text>
          {["cafe", "water-outline", "nutrition-outline"].map((icon, index) => (
            <View style={styles.iconBox} key={index}>
              <Ionicons name={icon as any} size={20} color="#9A6B46" />
            </View>
          ))}
        </View>

        {/* Rating */}
        <View style={styles.ratingRow}>
          <StarIcon color="#facc15" size={16} />
          <Text style={styles.rating}>4.8</Text>
          <Text style={styles.ratingCount}>(230)</Text>
        </View>
      </View>

      {/* Description */}
      <View style={styles.descriptionSection}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.descriptionText}>
          {expanded ? description : `${description.slice(0, 70)}...`}
          <Text
            style={styles.readMore}
            onPress={() => setExpanded(!expanded)}
          >
            {expanded ? " Show Less" : " Read More"}
          </Text>
        </Text>
      </View>

      {/* Size Selector */}
      <View style={styles.sizeSection}>
        <Text style={styles.sectionTitle}>Size</Text>
        <View style={styles.sizeRow}>
          {["S", "M", "L"].map((size) => (
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

      {/* Footer with Price + Button */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.price}>$ 4.53</Text>
        </View>
        <Pressable style={styles.buyButton}>
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
