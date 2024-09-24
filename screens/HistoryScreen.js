// screens/HistoryScreen.js
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const HistoryScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Consultation History</Text>
      <Text style={styles.screenText}>Review past sessions and chats with astrologers.</Text>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1506152983158-1f97214702d2?fit=crop&w=400&q=80' }}
        style={styles.bannerImage}
      />
      <Text style={styles.screenText}>Keep track of your astrology sessions.</Text>
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
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
});
