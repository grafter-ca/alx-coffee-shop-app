import { useRouter } from "expo-router";
import { TouchableOpacity, Text, View } from "react-native";
const Button = () => {

  const router = useRouter()
  return (
    <View style={{ marginVertical: 15 }}>
      <TouchableOpacity
        onPress={()=> router.push('/(tab)')}
        style={{
          backgroundColor: "#C67C4E",
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
          Get started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
