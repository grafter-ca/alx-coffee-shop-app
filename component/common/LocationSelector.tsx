import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LocationSelector = () => {
  const [selectedLocation, setSelectedLocation] = useState("Bilzen, Tanjungbalai");
  const [open, setOpen] = useState(false);

  const locations = [
    "Bilzen, Tanjungbalai",
    "Kigali, Rwanda",
    "Nairobi, Kenya",
    "Addis Ababa, Ethiopia",
  ];

  const toggleOpen = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen(!open);
  };

  return (
    <View>
      {/* Label */}
      <Text style={styles.locationLabel}>Location</Text>

      {/* Selector Header with Chevron */}
      <TouchableOpacity style={styles.header} onPress={toggleOpen}>
        <Text style={styles.locationText}>{selectedLocation}</Text>
        <Ionicons
          name={open ? "chevron-up" : "chevron-down"}
          size={18}
          color="#fff"
        />
      </TouchableOpacity>

      {/* Expandable Options */}
      {open && (
        <View style={styles.optionsContainer}>
          {locations.map((location) => {
            const isSelected = selectedLocation === location;
            return (
              <TouchableOpacity
                key={location}
                style={[styles.option, isSelected && styles.optionSelected]}
                onPress={() => {
                  setSelectedLocation(location);
                  setOpen(false);
                }}
              >
                <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
                  {location}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  locationLabel: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 4,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    paddingVertical: 6,
  },
  locationText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  optionsContainer: {
    marginTop: 8,
    backgroundColor: "#222",
    borderRadius: 8,
    paddingVertical: 6,
    zIndex:1
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  optionSelected: {
    backgroundColor: "#d17842",
    borderRadius: 6,
  },
  optionText: {
    fontSize: 16,
    color: "#ccc",
  },
  optionTextSelected: {
    color: "#fff",
    fontWeight: "600",
  },
});
