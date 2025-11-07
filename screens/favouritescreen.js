import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

export default function FavoritesScreen() {
  // Dummy saved items (later you can connect to async storage or a database)
  const favorites = [
    { type: "Hotel", name: "Eko Hotel", city: "Lagos" },
    { type: "Event", name: "Lagos Music Festival", city: "Lagos" },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "green", marginBottom: 20 }}>
        My Favorites
      </Text>

      {favorites.map((fav, i) => (
        <TouchableOpacity
          key={i}
          style={{ backgroundColor: "#f9f9f9", padding: 16, borderRadius: 12, marginBottom: 12 }}
        >
          <Text style={{ fontWeight: "bold" }}>{fav.type}: {fav.name}</Text>
          <Text>📍 {fav.city}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
