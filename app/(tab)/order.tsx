import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CoffeeCard from "@/component/common/CoffeeCard";
import CoffeeFilter from "@/component/coffee/Filter";
import { coffees } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";

const CoffeeContainer: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Section Header */}
        <CoffeeFilter />

        {/* Coffee List */}
        <View style={styles.coffeeContainer}>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CoffeeContainer;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingTop: 20,
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  coffeeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    // Add spacing between cards
    marginTop: 12,
  },
});
