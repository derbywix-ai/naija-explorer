import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

export default function HotelScreen({ route }) {
  const { name, city } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
      <Image source={{ uri: "https://picsum.photos/400/200" }} style={{ width: "100%", height: 200, borderRadius: 12, marginBottom: 16 }} />
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "green", marginBottom: 8 }}>{name}</Text>
      <Text style={{ marginBottom: 12 }}>📍 {city}</Text>
      <Text style={{ fontSize: 16, marginBottom: 16 }}>
        A luxury hotel located in {city}, perfect for travelers. Enjoy 5-star service and amazing views.
      </Text>
      <TouchableOpacity style={{ backgroundColor: "green", padding: 16, borderRadius: 12, alignItems: "center" }}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
