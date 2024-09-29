import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';

const ChatScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const astrologers = [
    {
      name: 'Astrologer A',
      language: 'English',
      experience: '5 years',
      type: 'Tarot',
      rating: 4.5,
      orders: 120,
      image: 'https://via.placeholder.com/80/FF5733/FFFFFF?text=A',
    },
    {
      name: 'Astrologer B',
      language: 'Hindi',
      experience: '3 years',
      type: 'Vedic',
      rating: 4.0,
      orders: 80,
      image: 'https://via.placeholder.com/80/33FF57/FFFFFF?text=B',
    },
    {
      name: 'Astrologer C',
      language: 'Spanish',
      experience: '10 years',
      type: 'Face Reading',
      rating: 4.8,
      orders: 200,
      image: 'https://via.placeholder.com/80/3357FF/FFFFFF?text=C',
    },
    // Add more astrologers as needed
  ];

  const filterOptions = ['Love', 'Marriage', 'Career', 'Health', 'Education'];

  return (
    <View style={styles.container}>
      {/* Search Icon */}
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.searchIcon}>
        <Text style={styles.searchIconText}>🔍</Text>
      </TouchableOpacity>

      {/* Filter Buttons */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
        {filterOptions.map((filter, index) => (
          <TouchableOpacity key={index} style={styles.filterButton}>
            <Text style={styles.filterButtonText}>{filter}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Astrologers List */}
      <ScrollView>
        {astrologers.map((astro, index) => (
          <View key={index} style={styles.astroCard}>
            <View style={styles.astroInfoLeft}>
              <Image source={{ uri: astro.image }} style={styles.astroImage} />
              <Text style={styles.astroRating}>Rating: {astro.rating}</Text>
              <Text style={styles.astroOrders}>Orders: {astro.orders}</Text>
            </View>
            <View style={styles.astroDetails}>
              <Text style={styles.astroName}>{astro.name}</Text>
              <Text style={styles.astroLanguage}>Language: {astro.language}</Text>
              <Text style={styles.astroExperience}>Experience: {astro.experience}</Text>
              <Text style={styles.astroType}>Type: {astro.type}</Text>
            </View>
            <View style={styles.freeChatContainer}>
              <TouchableOpacity style={styles.freeChatButton}>
                <Text style={styles.freeChatButtonText}>Free Chat</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Search Modal */}
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalView}>
          <TextInput style={styles.searchInput} placeholder="Search..." />
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  searchIcon: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  searchIconText: {
    fontSize: 24,
  },
  filterContainer: {
    marginBottom: 15,
  },
  filterButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#e74c3c', // Can customize based on requirements
  },
  filterButtonText: {
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  astroCard: {
    flexDirection: 'row',
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  astroInfoLeft: {
    alignItems: 'center',
    marginRight: 15,
  },
  astroImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  astroRating: {
    marginTop: 5,
    color: '#000',
  },
  astroOrders: {
    color: '#555',
  },
  astroDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  astroName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  astroLanguage: {
    color: '#555',
  },
  astroExperience: {
    color: '#555',
  },
  astroType: {
    color: '#555',
  },
  freeChatContainer: {
    justifyContent: 'center',
  },
  freeChatButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  freeChatButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  searchInput: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 5,
    padding: 10,
  },
  closeButtonText: {
    color: '#fff',
  },
});

export default ChatScreen;
