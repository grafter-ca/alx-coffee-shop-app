import { Image } from "expo-image";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Banner = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            source={require("@/assets/images/coffee/banner-1.png")}
            style={styles.image}
            contentFit="cover" // better than objectFit
          />

          {/* Promo Badge */}
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Promo</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  imageWrapper: {
    position: "relative",
    borderRadius: 12,
    overflow: "hidden", // ensures rounded corners work
  },
  image: {
    width: 350,
    height: 120,
    borderRadius: 12,
  },
  badge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "rgba(255,255,255,0.7)", // grayish background
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});
