import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "green", marginBottom: 20 }}>
        My Profile
      </Text>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 16 }}>👤 Name: John Doe</Text>
        <Text style={{ fontSize: 16 }}>📧 Email: johndoe@example.com</Text>
      </View>

      <TouchableOpacity
        style={{ backgroundColor: "#e6f7ec", padding: 16, borderRadius: 12, marginBottom: 12 }}
        onPress={() => navigation.navigate("Favorites")}
      >
        <Text style={{ fontWeight: "bold", color: "green" }}>⭐ My Favorites</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: "#fff0e6", padding: 16, borderRadius: 12 }}
      >
        <Text style={{ fontWeight: "bold", color: "orange" }}>⚙️ Settings</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
