import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Categories Section */}
      <View style={styles.categoriesContainer}>
        {[
          { title: 'Daily Horoscope', imageUrl: 'https://via.placeholder.com/80' },
          { title: 'Free Kundali', imageUrl: 'https://via.placeholder.com/80' },
          { title: 'Kundali Matching', imageUrl: 'https://via.placeholder.com/80' },
          { title: 'Free Chat', imageUrl: 'https://via.placeholder.com/80' }
        ].map((category, index) => (
          <View key={index} style={styles.categoryContainer}>
            <View style={styles.categoryCircle}>
              <Image source={{ uri: category.imageUrl }} style={styles.categoryImage} />
            </View>
            <Text style={styles.categoryText}>{category.title}</Text>
          </View>
        ))}
      </View>

      {/* Banner */}
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>Talk to Astrologers for Free!</Text>
        <Text>Banner will be shown here</Text>
      </View>

      {/* Live Astrologers Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Live Astrologers</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.liveAstrologersContainer}>
            {['Manas', 'Japleen', 'Parinita', 'Parmanand', 'Sriram'].map((name, index) => (
              <View key={index} style={styles.liveAstrologerCard}>
                <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.astroImage} />
                <Text style={styles.astroName}>{name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Astrologers Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Astrologers</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['Palmist Arun', 'Vaidikk', 'Shivpal', 'Astro Max', 'Astro Wise'].map((name, index) => (
            <View key={index} style={styles.astroCard}>
              <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.astroImage} />
              <Text style={styles.astroName}>{name}</Text>
              <Text style={styles.astroCharge}>20 / min</Text>
              <TouchableOpacity style={styles.chatButton}>
                <Text style={styles.chatButtonText}>Chat</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Feedback Form */}
      <View style={styles.feedbackContainer}>
        <Text style={styles.feedbackTitle}>We value your feedback!</Text>
        <TextInput style={styles.feedbackInput} placeholder="Write your feedback..." multiline />
        <TouchableOpacity style={styles.sendFeedbackButton}>
          <Text style={styles.buttonText}>Send Feedback</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Information Section */}
      <View style={styles.infoContainer}>
        {['Private & Confidential', 'Verified Astrologers', 'Secure Payments'].map((info, index) => (
          <View key={index} style={styles.infoIconContainer}>
            <Text style={styles.infoText}>{info}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    paddingVertical: 10,
  },
  categoryContainer: {
    alignItems: 'center',
    width: 80,
  },
  categoryCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  categoryText: {
    marginTop: 5,
    color: "black",
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bannerContainer: {
    backgroundColor: '#f13',
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
    height: 200,
  },
  bannerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    marginTop: 20,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  liveAstrologersContainer: {
    flexDirection: 'row',
    paddingBottom: 15,
    paddingTop: 15,
  },
  liveAstrologerCard: {
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: '#f13',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    height: 150,
    width: 'auto',
    flexWrap: 'wrap',
  },
  astroCard: {
    margin: 10,
    alignItems: 'center',
    padding: 20,
    borderColor: 'red',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
  },
  astroImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  astroName: {
    marginTop: 5,
    color: '#000',
    fontWeight: 'bold',
  },
  astroCharge: {
    color: '#555',
  },
  chatButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 5,
    padding: 5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  chatButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  feedbackContainer: {
    padding: 15,
    backgroundColor: '#f7f7f7',
    marginVertical: 20,
    alignItems: 'center',
    borderRadius: 10,
    elevation: 2,
  },
  feedbackTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  feedbackInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '90%',
    marginTop: 10,
    height: 60,
  },
  sendFeedbackButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    paddingVertical: 10,
  },
  infoIconContainer: {
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 40,
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  infoText: {
    fontSize: 12,
    color: '#fff',
  },
  button: {
    backgroundColor: '#e74c3c',
    borderRadius: 5,
    padding: 10,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
