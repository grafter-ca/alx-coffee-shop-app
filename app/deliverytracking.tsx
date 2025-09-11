import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { coffees } from "@/constants";

const DeliveryTracking = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  const coffeeId = params.coffeeId;
  const rawAddress = params.address;
  const address = Array.isArray(rawAddress)
    ? rawAddress[0]
    : rawAddress || "Jl. Kpg Sutoyo";

  const coffee = coffees.find((c) => c.id.toString() === coffeeId);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (!coffee) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Coffee not found</Text>
      </View>
    );
  }

  const MapSection = ({ address }: { address: string }) => {
    if (Platform.OS === "web") {
      return (
        <View
          style={{
            height: 200,
            backgroundColor: "#f3f4f6",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Map preview is not available on web.</Text>
          <Text>{address}</Text>
        </View>
      );
    }

     // Dynamically import MapView only on native
  const MapView = require("react-native-maps").default;
  const Marker = require("react-native-maps").Marker;

    return (
      <MapView
        style={{ height: 200, borderRadius: 12 }}
        initialRegion={{
          latitude: -6.2,
          longitude: 106.816666,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{ latitude: -6.2, longitude: 106.816666 }}
          title="Delivery Location"
          description={address}
        />
      </MapView>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.push("/order")}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </Pressable>
        <Text style={styles.headerTitle}>Delivery Tracking</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Map */}
      <MapSection address={address} />

      {/* Bottom Details */}
      <View style={styles.bottomCard}>
        <Text style={styles.timeLeft}>
          {minutes}:{seconds.toString().padStart(2, "0")} minutes left
        </Text>
        <Text style={styles.deliveryTo}>Delivery to {address}</Text>

        <View style={styles.infoBox}>
          <Ionicons name="bicycle" size={20} color="#C67C4E" />
          <Text style={styles.infoText}>
            Delivered your order — we will deliver your goods to you in the
            shortest possible time.
          </Text>
        </View>

        <View style={styles.courierRow}>
          <View style={styles.courierInfo}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
              }}
              style={styles.courierImage}
            />
            <View>
              <Text style={styles.courierName}>Brooklyn Simmons</Text>
              <Text style={styles.courierRole}>Personal Courier</Text>
            </View>
          </View>
          <Pressable style={styles.contactBtn}>
            <Ionicons name="call" size={20} color="#fff" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    zIndex: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f2937",
  },
  map: {
    flex: 1,
  },
  bottomCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 5,
  },
  timeLeft: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#C67C4E",
    marginBottom: 4,
  },
  deliveryTo: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 16,
  },
  infoBox: {
    flexDirection: "row",
    gap: 8,
    backgroundColor: "#FFF9F5",
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  infoText: { fontSize: 14, color: "#374151", flex: 1 },
  courierRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  courierInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  courierImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  courierName: { fontSize: 16, fontWeight: "600", color: "#1f2937" },
  courierRole: { fontSize: 14, color: "#6b7280" },
  contactBtn: {
    backgroundColor: "#C67C4E",
    padding: 12,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: { fontSize: 16, color: "#6b7280" },
});

export default DeliveryTracking;
