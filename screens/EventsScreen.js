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

const EventsScreen = () => {
  const events = [
    {
      id: 1,
      name: 'Calabar Carnival',
      date: 'Dec 1 - 31, 2024',
      location: 'Calabar, Cross River',
      image: 'https://images.unsplash.com/photo-1590841609987-4ac211afdde1?w=400',
      type: 'Cultural Festival'
    },
    {
      id: 2,
      name: 'Eyo Festival',
      date: 'May 25, 2024',
      location: 'Lagos Island, Lagos',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400',
      type: 'Cultural Festival'
    },
    {
      id: 3,
      name: 'Argungu Fishing Festival',
      date: 'Mar 15-18, 2024',
      location: 'Argungu, Kebbi',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400',
      type: 'Fishing Festival'
    },
    {
      id: 4,
      name: 'Ofala Festival',
      date: 'Oct 12-13, 2024',
      location: 'Onitsha, Anambra',
      image: 'https://images.unsplash.com/photo-1559767949-0feaa2137f5a?w=400',
      type: 'Royal Festival'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Events & Festivals</Text>
          <Text style={styles.subtitle}>Experience Nigeria's vibrant culture</Text>
        </View>

        {events.map((event) => (
          <TouchableOpacity key={event.id} style={styles.eventCard}>
            <Image 
              source={{ uri: event.image }} 
              style={styles.eventImage}
            />
            <View style={styles.eventInfo}>
              <Text style={styles.eventName}>{event.name}</Text>
              <Text style={styles.eventType}>{event.type}</Text>
              <View style={styles.eventDetails}>
                <Text style={styles.eventDate}>📅 {event.date}</Text>
                <Text style={styles.eventLocation}>📍 {event.location}</Text>
              </View>
              <TouchableOpacity style={styles.moreInfoButton}>
                <Text style={styles.moreInfoText}>More Info</Text>
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
  eventCard: {
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
  eventImage: {
    width: '100%',
    height: 180,
  },
  eventInfo: {
    padding: 15,
  },
  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  eventType: {
    fontSize: 14,
    color: '#008751',
    fontWeight: '500',
    marginBottom: 10,
  },
  eventDetails: {
    marginBottom: 15,
  },
  eventDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  eventLocation: {
    fontSize: 14,
    color: '#666',
  },
  moreInfoButton: {
    backgroundColor: '#008751',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  moreInfoText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default EventsScreen;