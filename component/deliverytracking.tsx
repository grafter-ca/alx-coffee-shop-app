import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Ionicons } from "@expo/vector-icons";
import "leaflet/dist/leaflet.css";

// Fix Leaflet default icon in TypeScript
import L from "leaflet";

const DefaultIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
Marker.prototype.options.icon = DefaultIcon;

const DeliveryTracking = ({ lat = -1.9441, lon = 30.0619 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Track Your Delivery</Text>

      {/* Leaflet Map */}
      <div style={{ width: "100%", height: 250, marginBottom: 20 }}>
        <MapContainer
          center={[lat, lon]}
          zoom={15}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[lat, lon]}>
            <Popup>Delivery Location</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Delivery Info Section */}
      <View style={styles.infoCard}>
        <Ionicons name="bicycle" size={28} color="#6F4E37" />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.infoTitle}>Rider is on the way 🚴‍♂️</Text>
          <Text style={styles.infoSub}>Estimated arrival: 15 mins</Text>
        </View>
      </View>
    </View>
  );
};

export default DeliveryTracking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  infoSub: {
    fontSize: 14,
    color: "gray",
  },
});
