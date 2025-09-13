import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/component/Button";

const fontFamily = "Sora";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      {/* Background image */}
      <ImageBackground
        source={require("../assets/images/coffee/6.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>
            Fall in Love with Coffee in Blissful Delight!
          </Text>
          <Text style={styles.subtitle}>
            Welcome to our cozy coffee corner, where every cup is a delightful treat for you.
          </Text>
          <Button />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: fontFamily,
    marginBottom: 10,
  },
  subtitle: {
    color: "gray",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: fontFamily,
  },
});
