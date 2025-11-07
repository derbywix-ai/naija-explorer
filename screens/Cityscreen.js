import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

export default function CityScreen({ route, navigation }) {
  const { city } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
      <Image source={{ uri: city.img }} style={{ width: "100%", height: 150, borderRadius: 12, marginBottom: 16 }} />
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "green", marginBottom: 12 }}>
        Welcome to {city.name}
      </Text>

      <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 8 }}>Hotels</Text>
      <TouchableOpacity 
        style={{ backgroundColor: "#e6f7ec", padding: 16, borderRadius: 12, marginBottom: 12 }}
        onPress={() => navigation.navigate("Hotel", { name: "Eko Hotel", city: city.name })}
      >
        <Text style={{ fontWeight: "bold" }}>Eko Hotel</Text>
        <Text>⭐⭐⭐⭐⭐</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 8 }}>Events</Text>
      <TouchableOpacity 
        style={{ backgroundColor: "#fff0e6", padding: 16, borderRadius: 12, marginBottom: 12 }}
        onPress={() => navigation.navigate("Event", { name: "Lagos Music Festival", city: city.name })}
      >
        <Text style={{ fontWeight: "bold" }}>Lagos Music Festival</Text>
        <Text>📅 15th Dec</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
