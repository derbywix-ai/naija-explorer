import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {
  const featuredDestinations = [
    { id: 1, name: 'Lagos', description: 'Vibrant city life & beaches', color: ['#FFA69E', '#861657'] },
    { id: 2, name: 'Abuja', description: 'Capital city & modern architecture', color: ['#FFD6A5', '#FD841F'] },
    { id: 3, name: 'Calabar', description: 'Carnival & cultural heritage', color: ['#6A11CB', '#2575FC'] }
  ];

  const popularFoods = [
    { id: 1, name: 'Jollof Rice', color: ['#FFB347', '#FFCC33'] },
    { id: 2, name: 'Suya', color: ['#FF7E5F', '#FEB47B'] }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Welcome to</Text>
          <Text style={styles.appName}>Naija Explorer</Text>
          <Text style={styles.subtitle}>Discover the beauty of Nigeria</Text>
        </View>

        {/* Search Bar */}
        <TouchableOpacity style={styles.searchBar}>
          <Text style={styles.searchText}>Search destinations, hotels, food...</Text>
        </TouchableOpacity>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <Text style={styles.sectionTitle}>Quick Access</Text>
          <View style={styles.actionGrid}>
            {['Hotels', 'Food', 'Transport', 'Culture'].map((action, idx) => (
              <TouchableOpacity key={idx} style={styles.actionItem}>
                <View style={[styles.actionIcon, {backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16)}]}>
                  <Text style={{fontSize: 24}}>🏷️</Text>
                </View>
                <Text style={styles.actionText}>{action}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Featured Destinations */}
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Destinations</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {featuredDestinations.map(dest => (
              <TouchableOpacity
                key={dest.id}
                style={styles.destinationCard}
                onPress={() => navigation.navigate('Destinations')}
              >
                <LinearGradient
                  colors={dest.color}
                  style={styles.destinationImage}
                />
                <View style={styles.destinationInfo}>
                  <Text style={styles.destinationName}>{dest.name}</Text>
                  <Text style={styles.destinationDesc}>{dest.description}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Popular Foods */}
        <View style={styles.foodSection}>
          <Text style={styles.sectionTitle}>Popular Nigerian Foods</Text>
          <View style={styles.foodGrid}>
            {popularFoods.map(food => (
              <TouchableOpacity key={food.id} style={styles.foodItem}>
                <LinearGradient colors={food.color} style={styles.foodImage} />
                <Text style={styles.foodName}>{food.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { padding: 20, paddingTop: 10 },
  greeting: { fontSize: 16, color: '#666' },
  appName: { fontSize: 28, fontWeight: 'bold', color: '#008751', marginTop: 5 },
  subtitle: { fontSize: 16, color: '#666', marginTop: 5 },
  searchBar: { backgroundColor: 'white', margin: 20, marginTop: 10, padding: 15, borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  searchText: { color: '#999', fontSize: 16 },
  quickActions: { padding: 20, paddingTop: 10 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: '#333' },
  actionGrid: { flexDirection: 'row', justifyContent: 'space-between' },
  actionItem: { alignItems: 'center', flex: 1 },
  actionIcon: { width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginBottom: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  actionText: { fontSize: 12, color: '#333', textAlign: 'center' },
  featuredSection: { padding: 20, paddingTop: 10 },
  destinationCard: { width: 280, marginRight: 15, borderRadius: 15, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  destinationImage: { width: '100%', height: 160, borderRadius: 15 },
  destinationInfo: { padding: 15 },
  destinationName: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  destinationDesc: { fontSize: 14, color: '#666', marginTop: 5 },
  foodSection: { padding: 20, paddingTop: 10 },
  foodGrid: { flexDirection: 'row', justifyContent: 'space-between' },
  foodItem: { flex: 1, marginHorizontal: 5 },
  foodImage: { width: '100%', height: 120, borderRadius: 10 },
  foodName: { textAlign: 'center', marginTop: 8, fontSize: 14, fontWeight: '500', color: '#333' },
});

export default HomeScreen;
