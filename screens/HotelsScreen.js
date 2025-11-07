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

const HotelsScreen = () => {
  const hotels = [
    {
      id: 1,
      name: 'Eko Hotels & Suites',
      location: 'Lagos',
      price: '₦45,000',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400'
    },
    {
      id: 2,
      name: 'Transcorp Hilton',
      location: 'Abuja',
      price: '₦52,000',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400'
    },
    {
      id: 3,
      name: 'Tinapa Resort',
      location: 'Calabar',
      price: '₦38,000',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Hotels & Accommodation</Text>
          <Text style={styles.subtitle}>Find your perfect stay</Text>
        </View>

        {hotels.map((hotel) => (
          <TouchableOpacity key={hotel.id} style={styles.hotelCard}>
            <Image 
              source={{ uri: hotel.image }} 
              style={styles.hotelImage}
            />
            <View style={styles.hotelInfo}>
              <Text style={styles.hotelName}>{hotel.name}</Text>
              <Text style={styles.hotelLocation}>{hotel.location}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>⭐ {hotel.rating}</Text>
                <Text style={styles.price}>{hotel.price}/night</Text>
              </View>
              <TouchableOpacity style={styles.bookButton}>
                <Text style={styles.bookButtonText}>Book Now</Text>
              </TouchableOpacity>
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
  hotelCard: {
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
  hotelImage: {
    width: '100%',
    height: 200,
  },
  hotelInfo: {
    padding: 15,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  hotelLocation: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  rating: {
    fontSize: 14,
    color: '#333',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#008751',
  },
  bookButton: {
    backgroundColor: '#008751',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HotelsScreen;