import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

const FavouritesScreen = () => {
  const favourites = [
    {
      id: 1,
      name: 'Eko Hotels & Suites',
      type: 'Hotel',
      location: 'Lagos',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400'
    },
    {
      id: 2,
      name: 'Jollof Rice',
      type: 'Food',
      location: 'Various Locations',
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400'
    },
    {
      id: 3,
      name: 'Calabar Carnival',
      type: 'Event',
      location: 'Calabar',
      image: 'https://images.unsplash.com/photo-1590841609987-4ac211afdde1?w=400'
    },
    {
      id: 4,
      name: 'Lekki Beach',
      type: 'Attraction',
      location: 'Lagos',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400'
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Hotel': return '#008751';
      case 'Food': return '#E6BE8A';
      case 'Event': return '#FF6B6B';
      case 'Attraction': return '#4ECDC4';
      default: return '#666';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>My Favourites</Text>
          <Text style={styles.subtitle}>Your saved places and experiences</Text>
        </View>

        {favourites.length > 0 ? (
          favourites.map((item) => (
            <TouchableOpacity key={item.id} style={styles.favouriteCard}>
              <Image 
                source={{ uri: item.image }} 
                style={styles.favouriteImage}
              />
              <View style={styles.favouriteInfo}>
                <Text style={styles.favouriteName}>{item.name}</Text>
                <View style={styles.favouriteDetails}>
                  <View 
                    style={[
                      styles.typeTag,
                      { backgroundColor: getTypeColor(item.type) }
                    ]}
                  >
                    <Text style={styles.typeText}>{item.type}</Text>
                  </View>
                  <Text style={styles.favouriteLocation}>📍 {item.location}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.removeButton}>
                <Text style={styles.removeText}>×</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>No Favourites Yet</Text>
            <Text style={styles.emptyText}>
              Save your favorite places, hotels, and experiences to see them here.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#008751',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  favouriteCard: {
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 15,
    overflow: 'hidden',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  favouriteImage: {
    width: 100,
    height: 100,
  },
  favouriteInfo: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  favouriteName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  favouriteDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeTag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 10,
  },
  typeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  favouriteLocation: {
    fontSize: 14,
    color: '#666',
  },
  removeButton: {
    padding: 15,
    justifyContent: 'center',
  },
  removeText: {
    fontSize: 24,
    color: '#ff4444',
    fontWeight: 'bold',
  },
  emptyState: {
    alignItems: 'center',
    padding: 50,
    marginTop: 50,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default FavouritesScreen;