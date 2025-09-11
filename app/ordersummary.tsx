import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { coffees } from "@/constants";

const OrderSummary = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [note, setNote] = useState("");

  // Debug the parameters
  console.log("Params received:", params);

  // Get coffeeId safely - handle case where it might be an array
  const coffeeId = Array.isArray(params.coffeeId)
    ? params.coffeeId[0]
    : params.coffeeId;
  const coffeeSize = Array.isArray(params.coffeeSize)
    ? params.coffeeSize[0]
    : params.coffeeSize;

  // Debug the coffee ID
  console.log(
    "Looking for coffee with ID:",
    coffeeId,
    "Type:",
    typeof coffeeId
  );

  // Find the coffee - handle case where coffeeId might be undefined
  const coffee = coffeeId
    ? coffees.find((c) => {
        console.log(
          "Checking coffee:",
          c.id,
          "Type:",
          typeof c.id,
          "Match:",
          c.id.toString() === coffeeId
        );
        return c.id.toString() === coffeeId;
      })
    : null;

  // Debug the coffees array
  console.log("Available coffees:", coffees);

  if (!coffee) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          Coffee not found for ID: {coffeeId}
        </Text>
        <Text style={styles.errorSubtext}>
          Available IDs: {coffees.map((c) => c.id).join(", ")}
        </Text>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  const addresses = [
    {
      id: 1,
      name: "Keg Sutoyo",
      address: "Keg Sutoyo, No. 620, Biluen, Tanjungbalaki",
    },
    {
      id: 2,
      name: "Caffe Mocha",
      address: "Deep Fearn",
    },
  ];

  const deliveryFee = 2.0;
  const discount = 1.0;
  const total = (parseFloat(coffee.price) + deliveryFee - discount).toFixed(2);

  const handlePlaceOrder = () => {
    router.push({
      pathname: "/deliverytracking",
      params: {
        coffeeId: coffee.id.toString(),
        address: addresses[selectedAddress].address,
        total: total,
      },
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.push("/order_detail")}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </Pressable>
        <Text style={styles.headerTitle}>Order Summary</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.butonGrp}>
        <Pressable
          style={styles.orderButton}
          onPress={() => console.log("Delived now")}
        >
          <Text style={styles.buttonGrpText}>Deliver</Text>
        </Pressable>
        <Pressable onPress={() => console.log("Picked now")}>
          <Text style={styles.buttonGrpText}>Pick Up</Text>
        </Pressable>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery Address</Text>

        {addresses.map((address, index) => (
          <Pressable
            key={address.id}
            style={[
              styles.addressCard,
              selectedAddress === index && styles.selectedAddress,
            ]}
            onPress={() => setSelectedAddress(index)}
          >
            <View style={styles.addressHeader}>
              <Text style={styles.addressName}>{address.name}</Text>
              <Ionicons
                name={
                  selectedAddress === index
                    ? "radio-button-on"
                    : "radio-button-off"
                }
                size={20}
                color="#C67C4E"
              />
            </View>
            <Text style={styles.addressText}>{address.address}</Text>

            {selectedAddress === index && (
              <View style={styles.addressActions}>
                <Pressable style={styles.actionButton}>
                  <Ionicons name="create" size={20} color="gray" />
                  <Text style={styles.actionText}>Edit Address</Text>
                </Pressable>
                <Pressable style={styles.actionButton}>
                  <Ionicons name="document-text" size={20} color="gray" />
                  <Text style={styles.actionText}>Add Note</Text>
                </Pressable>
              </View>
            )}
          </Pressable>
        ))}
      </View>

      <View style={styles.section}>
        <View style={styles.coffeeItem}>
          <Image source={coffee.image} style={styles.coffeeImageSmall} />
          <View style={styles.coffeeInfo}>
            <Text style={styles.coffeeName}>{coffee.title}</Text>
            <Text style={styles.coffeeDetails}>
              Size: {coffeeSize} • {coffee.subtitle}
            </Text>
          </View>
          <Text style={styles.coffeePrice}>${coffee.price}</Text>
        </View>
      </View>
      
      <View style={styles.discountBanner}>
      <View style={styles.subDiscountBanner}>
        <Ionicons name="pricetag" size={20} color="#FFF" />
        <Text style={styles.discountText}>1 Discount is Applied</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#000" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Summary</Text>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Price</Text>
          <Text style={styles.summaryValue}>${coffee.price}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Delivery Fee</Text>
          <View style={styles.deliveryFeeRow}>
            <Text style={styles.originalFee}>$2.0</Text>
            <Text style={styles.discountedFee}>$1.0</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.summaryRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>${total}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.paymentMethod}>
          <View style={styles.subPaymentMethod}>
          <Ionicons name="wallet" size={24} color="#C67C4E" />
          <View>
            <Text style={styles.paymentText}>Cash/Wallet</Text>
            <Text style={styles.paymentAmount}>${total}</Text>
          </View>
          </View>
        <Ionicons name="chevron-down" size={20} color="#000" />
        </View>

      </View>

      <Pressable style={styles.orderButton} onPress={handlePlaceOrder}>
        <Text style={styles.orderButtonText}>Order</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  errorSubtext: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
    color: "#666",
  },
  backButton: {
    backgroundColor: "#C67C4E",
    padding: 15,
    borderRadius: 10,
    margin: 20,
    alignItems: "center",
  },
  backButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  butonGrp: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonGrpText: {
    color: "#000",
    fontWeight: 700,
    fontSize: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
    color: "#666",
  },
  section: {
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
  addressCard: {
    borderWidth: 1,
    borderColor: "#e9ecef",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  selectedAddress: {
    borderColor: "#C67C4E",
    backgroundColor: "#FFF9F5",
  },
  addressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  addressName: {
    fontSize: 16,
    fontWeight: "600",
  },
  addressText: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 12,
  },
  addressActions: {
    flexDirection: "row",
    gap: 16,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    borderColor:'gray',
    fontWeight:300,
    borderWidth:2,
    paddingVertical:2,
    paddingHorizontal:8,
    borderRadius:50,
    gap:2
  },
  actionText: {
    fontSize: 14,
    color: "gray",
    fontWeight: "500",
  },
  coffeeItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  coffeeImageSmall: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  coffeeInfo: {
    flex: 1,
  },
  coffeeName: {
    fontSize: 16,
    fontWeight: "600",
  },
  coffeeDetails: {
    fontSize: 14,
    color: "#6b7280",
  },
  coffeePrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#C67C4E",
  },
  discountBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    gap: 8,
    backgroundColor: "#FFFFFF",
    padding: 12,
    margin: 8,
    borderRadius:8
  },
  subDiscountBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  discountText: {
    color: "#000",
    fontWeight: "500",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: "#6b7280",
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: "500",
  },
  deliveryFeeRow: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  originalFee: {
    fontSize: 14,
    color: "#6b7280",
    textDecorationLine: "line-through",
  },
  discountedFee: {
    fontSize: 14,
    fontWeight: "500",
    color: "#22c55e",
  },
  divider: {
    height: 1,
    backgroundColor: "#e9ecef",
    marginVertical: 12,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#C67C4E",
  },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    gap: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e9ecef",
    borderRadius: 12,
  },
  subPaymentMethod:{
     flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  paymentText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
  },
  paymentAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#C67C4E",
  },
  orderButton: {
    backgroundColor: "#C67C4E",
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  orderButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default OrderSummary;
