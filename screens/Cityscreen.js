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

const CityScreen = ({ route, navigation }) => {
  const { city } = route.params || { city: { name: 'Lagos' } };

  // Sample city data - in real app, this would come from route.params
  const cityData = {
    name: city?.name || 'Lagos',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    description: 'Lagos is the commercial capital of Nigeria and the most populous city in Africa. Known for its vibrant energy, beautiful beaches, and bustling markets.',
    attractions: [
      { name: 'Lekki Beach', type: 'Beach' },
      { name: 'Nike Art Gallery', type: 'Art' },
      { name: 'Freedom Park', type: 'History' },
      { name: 'Tarkwa Bay', type: 'Beach' },
    ],
    hotels: [
      { name: 'Eko Hotels & Suites', price: '₦45,000' },
      { name: 'The George Hotel', price: '₦35,000' },
      { name: 'Radisson Blu', price: '₦50,000' },
    ]
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image 
          source={{ uri: cityData.image }} 
          style={styles.cityImage}
        />
        
        <View style={styles.content}>
          <Text style={styles.cityName}>{cityData.name}</Text>
          <Text style={styles.description}>{cityData.description}</Text>

          {/* Attractions Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Top Attractions</Text>
            {cityData.attractions.map((attraction, index) => (
              <TouchableOpacity key={index} style={styles.attractionCard}>
                <View style={styles.attractionInfo}>
                  <Text style={styles.attractionName}>{attraction.name}</Text>
                  <Text style={styles.attractionType}>{attraction.type}</Text>
                </View>
                <Text style={styles.arrow}>→</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Hotels Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recommended Hotels</Text>
            {cityData.hotels.map((hotel, index) => (
              <TouchableOpacity key={index} style={styles.hotelCard}>
                <View style={styles.hotelInfo}>
                  <Text style={styles.hotelName}>{hotel.name}</Text>
                  <Text style={styles.hotelPrice}>{hotel.price}/night</Text>
                </View>
                <TouchableOpacity style={styles.bookButton}>
                  <Text style={styles.bookButtonText}>Book</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>

          {/* Food Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Local Cuisine</Text>
            <TouchableOpacity 
              style={styles.foodButton}
              onPress={() => navigation.navigate('Food')}
            >
              <Text style={styles.foodButtonText}>Explore Local Food</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  cityImage: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 20,
  },
  cityName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#008751',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 30,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  attractionCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  attractionInfo: {
    flex: 1,
  },
  attractionName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  attractionType: {
    fontSize: 14,
    color: '#666',
  },
  arrow: {
    fontSize: 18,
    color: '#008751',
  },
  hotelCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  hotelInfo: {
    flex: 1,
  },
  hotelName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  hotelPrice: {
    fontSize: 14,
    color: '#008751',
    fontWeight: '500',
  },
  bookButton: {
    backgroundColor: '#008751',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  bookButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  foodButton: {
    backgroundColor: '#E6BE8A',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  foodButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CityScreen;