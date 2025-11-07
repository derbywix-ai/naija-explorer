import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  LinearGradient
} from 'react-native';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {
  const featuredDestinations = [
    {
      id: 1,
      name: 'Lagos',
      color: ['#4facfe', '#00f2fe'],
      description: 'Vibrant city life & beaches'
    },
    {
      id: 2,
      name: 'Abuja',
      color: ['#43e97b', '#38f9d7'],
      description: 'Capital city & modern architecture'
    },
    {
      id: 3,
      name: 'Calabar',
      color: ['#fa709a', '#fee140'],
      description: 'Carnival & cultural heritage'
    }
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
            {['🏨 Hotels', '🍴 Food', '🚗 Transport', '🎭 Culture'].map((item, index) => (
              <TouchableOpacity key={index} style={styles.actionItem}>
                <View style={[styles.actionIcon, { backgroundColor: colors[index % colors.length] }]}>
                  <Text style={styles.emoji}>{item.split(' ')[0]}</Text>
                </View>
                <Text style={styles.actionText}>{item.split(' ')[1]}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Featured Destinations */}
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Destinations</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {featuredDestinations.map((destination) => (
              <TouchableOpacity 
                key={destination.id} 
                style={styles.destinationCard}
                onPress={() => navigation.navigate('Destinations')}
              >
                <ExpoLinearGradient
                  colors={destination.color}
                  style={styles.gradientBackground}
                >
                  <Text style={styles.destinationName}>{destination.name}</Text>
                  <Text style={styles.destinationDesc}>{destination.description}</Text>
                </ExpoLinearGradient>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Popular Foods */}
        <View style={styles.foodSection}>
          <Text style={styles.sectionTitle}>Popular Nigerian Foods</Text>
          <View style={styles.foodGrid}>
            <View style={[styles.foodItem, { backgroundColor: '#ffb347' }]}>
              <Text style={styles.foodName}>🍚 Jollof Rice</Text>
            </View>
            <View style={[styles.foodItem, { backgroundColor: '#ffcc33' }]}>
              <Text style={styles.foodName}>🥩 Suya</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const colors = ['#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    paddingTop: 10,
  },
  greeting: {
    fontSize: 16,
    color: '#666',
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#008751',
    marginTop: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  searchBar: {
    backgroundColor: 'white',
    margin: 20,
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchText: {
    color: '#999',
    fontSize: 16,
  },
  quickActions: {
    padding: 20,
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  actionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionItem: {
    alignItems: 'center',
    flex: 1,
  },
  actionIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    elevation: 3,
  },
  emoji: {
    fontSize: 24,
  },
  actionText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  featuredSection: {
    padding: 20,
    paddingTop: 10,
  },
  destinationCard: {
    width: 280,
    marginRight: 15,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
  },
  gradientBackground: {
    height: 160,
    justifyContent: 'flex-end',
    padding: 15,
  },
  destinationName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  destinationDesc: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  foodSection: {
    padding: 20,
    paddingTop: 10,
  },
  foodGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  foodItem: {
    flex: 1,
    marginHorizontal: 5,
    height: 120,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodName: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default HomeScreen;
