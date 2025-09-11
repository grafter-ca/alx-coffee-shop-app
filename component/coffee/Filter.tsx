import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const CoffeeFilter = () => {
  const [selectedCoffee, setSelectedCoffee] = useState("All Coffee");

  const Coffees = [
    "All Coffee",
    "Machiato",
    "Latte",
    "Americano",
    "Rwanda"
  ];

  return (
    <View style={{display:'flex',alignItems:'center',marginBottom:16}}>
      {/* Horizontal Selector */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Coffees.map((Coffee) => {
          const isSelected = selectedCoffee === Coffee;
          return (
            <TouchableOpacity
              key={Coffee}
              style={[styles.option, isSelected && styles.optionSelected]}
              onPress={() => setSelectedCoffee(Coffee)}
            >
              <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
                {Coffee}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CoffeeFilter;

const styles = StyleSheet.create({
  CoffeeLabel: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 8,
  },
  option: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  optionSelected: {
    backgroundColor: "#d17842", // highlight color
  },
  optionText: {
    fontSize: 14,
    color: "#aaa",
  },
  optionTextSelected: {
    color: "#fff",
    fontWeight: "600",
  },
});
