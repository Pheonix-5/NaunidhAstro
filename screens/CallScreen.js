// screens/CallScreen.js
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const CallScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Call an Astrologer</Text>
      <Text style={styles.screenText}>Get direct advice over a call with a professional astrologer.</Text>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1517260739337-203a1413d6a6?fit=crop&w=400&q=80' }}
        style={styles.bannerImage}
      />
      <Text style={styles.screenText}>24/7 support available.</Text>
    </View>
  );
};

export default CallScreen;

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
