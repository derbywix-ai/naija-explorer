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

const DestinationsScreen = () => {
  const destinations = [
    {
      id: 1,
      name: 'Lagos',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
      highlights: ['Beaches', 'Nightlife', 'Markets'],
      description: 'Commercial hub with vibrant culture'
    },
    {
      id: 2,
      name: 'Abuja',
      image: 'https://images.unsplash.com/photo-1599396170197-9b0a6037638b?w=400',
      highlights: ['Aso Rock', 'National Mosque', 'Modern Architecture'],
      description: 'Beautifully planned capital city'
    },
    {
      id: 3,
      name: 'Calabar',
      image: 'https://images.unsplash.com/photo-1590841609987-4ac211afdde1?w=400',
      highlights: ['Carnival', 'History', 'Wildlife'],
      description: 'Cultural and historical treasure'
    },
    {
      id: 4,
      name: 'Kano',
      image: 'https://images.unsplash.com/photo-1580651315530-69aa940f68e8?w=400',
      highlights: ['Ancient City', 'Markets', 'Culture'],
      description: 'Ancient city with rich history'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Destinations</Text>
          <Text style={styles.subtitle}>Explore Nigeria's beautiful places</Text>
        </View>

        {destinations.map((destination) => (
          <TouchableOpacity key={destination.id} style={styles.destinationCard}>
            <Image 
              source={{ uri: destination.image }} 
              style={styles.destinationImage}
            />
            <View style={styles.destinationContent}>
              <Text style={styles.destinationName}>{destination.name}</Text>
              <Text style={styles.destinationDescription}>{destination.description}</Text>
              <View style={styles.highlights}>
                {destination.highlights.map((highlight, index) => (
                  <View key={index} style={styles.highlightTag}>
                    <Text style={styles.highlightText}>{highlight}</Text>
                  </View>
                ))}
              </View>
            </View>
          </TouchableOpacity>
        ))}
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
  destinationCard: {
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  destinationImage: {
    width: '100%',
    height: 200,
  },
  destinationContent: {
    padding: 15,
  },
  destinationName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  destinationDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  highlights: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  highlightTag: {
    backgroundColor: '#E6BE8A',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 5,
  },
  highlightText: {
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
  },
});

export default DestinationsScreen;