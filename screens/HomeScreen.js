// screens/HomeScreen.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <>
    <ScrollView style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Astrology Insights</Text>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1621707083539-6013e0bdf113?fit=crop&w=400&q=80' }}
        style={styles.bannerImage}
      />
      <Text style={styles.screenText}>Get daily updates and insights on astrology.</Text>

      <View style={styles.astrologyCard}>
        <Text style={styles.cardTitle}>Today's Horoscope</Text>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?fit=crop&w=400&q=80' }}
          style={styles.cardImage}
        />
        <Text style={styles.cardText}>Discover what the stars have in store for you today!</Text>
      </View>

      <View style={styles.astrologyCard}>
        <Text style={styles.cardTitle}>Monthly Predictions</Text>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1526378722249-cd1e21d35410?fit=crop&w=400&q=80' }}
          style={styles.cardImage}
        />
        <Text style={styles.cardText}>A detailed overview of your month ahead.</Text>
      </View>
    </ScrollView>

    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20,
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },
  screenText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  astrologyCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f8f8f8',
    elevation: 4, // for shadow effect
  },
  username: {
    fontSize: 16,
    fontWeight: '500',
  },
  balance: {
    fontSize: 16,
    color: 'green',
  },
});
