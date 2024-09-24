// screens/ChatScreen.js
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ChatScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Astrologer Chat</Text>
      <Text style={styles.screenText}>Chat with our top astrologers for personalized insights.</Text>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?fit=crop&w=400&q=80' }}
        style={styles.bannerImage}
      />
      <Text style={styles.screenText}>Your first chat is free!</Text>
    </View>
  );
};

export default ChatScreen;

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
