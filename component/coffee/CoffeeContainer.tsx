import React from "react";
import { View, StyleSheet } from "react-native";
import CoffeeCard from "@/component/common/CoffeeCard";
import CoffeeFilter from "./Filter";
import { coffees } from "@/constants";
const CoffeeContainer: React.FC = () => {

  return (
    <View style={styles.container}>
      {/* Section Header */}
      <CoffeeFilter />

      {/* Coffee List */}
      <View style={styles.coffeeContainer} >
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </View>
    </View>
  );
};

export default CoffeeContainer;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center',
    paddingRight: 16,
    marginBottom: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  seeAll: {
    fontSize: 14,
    color: "#d17842",
  },
  coffeeContainer:{
    display:"flex",
    flexWrap:"wrap",
    flexDirection:'row',
    gap:12,
    alignItems:"center",
    justifyContent:"center",
  }
});
