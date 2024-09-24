// screens/LiveScreen.js
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const LiveScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Live Astrology Sessions</Text>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1525441792171-04a1144eacc6?fit=crop&w=400&q=80' }}
        style={styles.bannerImage}
      />
      <Text style={styles.screenText}>Watch live sessions and get real-time insights from astrologers.</Text>
    </View>
  );
};

export default LiveScreen;

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
