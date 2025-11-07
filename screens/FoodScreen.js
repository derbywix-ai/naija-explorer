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

const FoodScreen = () => {
  const foods = [
    {
      id: 1,
      name: 'Jollof Rice',
      description: 'The famous West African rice dish',
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400',
      popularIn: ['Lagos', 'Port Harcourt', 'Ibadan']
    },
    {
      id: 2,
      name: 'Suya',
      description: 'Spicy grilled meat skewers',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d96f?w=400',
      popularIn: ['Kano', 'Abuja', 'Kaduna']
    },
    {
      id: 3,
      name: 'Pounded Yam & Egusi',
      description: 'Traditional swallow with melon soup',
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400',
      popularIn: ['Enugu', 'Onitsha', 'Aba']
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Nigerian Cuisine</Text>
          <Text style={styles.subtitle}>Taste the flavors of Nigeria</Text>
        </View>

        {foods.map((food) => (
          <View key={food.id} style={styles.foodCard}>
            <Image 
              source={{ uri: food.image }} 
              style={styles.foodImage}
            />
            <View style={styles.foodInfo}>
              <Text style={styles.foodName}>{food.name}</Text>
              <Text style={styles.foodDescription}>{food.description}</Text>
              <View style={styles.popularSection}>
                <Text style={styles.popularTitle}>Popular in:</Text>
                <View style={styles.popularTags}>
                  {food.popularIn.map((city, index) => (
                    <View key={index} style={styles.cityTag}>
                      <Text style={styles.cityText}>{city}</Text>
                    </View>
                  ))}
                </View>
              </View>
              <TouchableOpacity style={styles.findButton}>
                <Text style={styles.findButtonText}>Find Restaurants</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  foodCard: {
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
  foodImage: {
    width: '100%',
    height: 200,
  },
  foodInfo: {
    padding: 15,
  },
  foodName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  foodDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  popularSection: {
    marginBottom: 15,
  },
  popularTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  popularTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cityTag: {
    backgroundColor: '#E6BE8A',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 5,
  },
  cityText: {
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
  },
  findButton: {
    backgroundColor: '#008751',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  findButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FoodScreen;