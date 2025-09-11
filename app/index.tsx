import { ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/component/Button";


export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Section with background image from local assets */}
      <ImageBackground
        source={require("../assets/images/coffee/6.png")}
        style={{
          flex: 1,
          width: "100%",
          height: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
        resizeMode="cover"
        width={100}
      />
      <View style={{ backgroundColor: "black",height:"auto",padding:10}}>
        <View style={{ marginVertical: 0 }}>
          <Text
            style={{
              color: "white",
              fontSize: 34,
              fontWeight: "bold",
              textAlign: "center",
              fontFamily:fontFamily
            }}
          >
            Fall in Love with Coffee in Blissful Delight!
          </Text>
          <Text
            style={{
              color:"gray",
              fontSize:18,
              fontWeight: "400",
              textAlign:"center",
              marginTop:6,
              fontFamily:fontFamily
            }}
          >
          Welcome to our cozy coffee corner, where every cup is a delightful
            for you.
          </Text>
        </View>
        {/* Another normal section */}
        <Button />
      </View>
    </SafeAreaView>
  );
}


const fontFamily ="Sora"
