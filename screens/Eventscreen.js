import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

export default function EventScreen({ route }) {
  const { name, city } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
      <Image source={{ uri: "https://picsum.photos/400/200?event" }} style={{ width: "100%", height: 200, borderRadius: 12, marginBottom: 16 }} />
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "green", marginBottom: 8 }}>{name}</Text>
      <Text style={{ marginBottom: 12 }}>📍 {city}</Text>
      <Text style={{ fontSize: 16, marginBottom: 16 }}>
        Join us for {name}, one of the biggest events in {city}. Enjoy live music, food, and culture.
      </Text>
      <TouchableOpacity style={{ backgroundColor: "orange", padding: 16, borderRadius: 12, alignItems: "center" }}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Get Tickets</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
