import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const CallScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const astrologers = [
    { name: 'Astrologer A', language: 'English', experience: '5 years', type: 'Tarot', rating: 4.5, orders: 120, price: '₹20/min', image: 'https://via.placeholder.com/80/FF5733/FFFFFF?text=A', expertise: ['Love', 'Career'] },
    { name: 'Astrologer B', language: 'Hindi', experience: '3 years', type: 'Vedic', rating: 4.0, orders: 80, price: '₹15/min', image: 'https://via.placeholder.com/80/33FF57/FFFFFF?text=B', expertise: ['Marriage', 'Health'] },
    { name: 'Astrologer C', language: 'Spanish', experience: '10 years', type: 'Face Reading', rating: 4.8, orders: 200, price: '₹30/min', image: 'https://via.placeholder.com/80/3357FF/FFFFFF?text=C', expertise: ['Career', 'Health'] },
    { name: 'Astrologer D', language: 'English', experience: '7 years', type: 'Numerology', rating: 4.2, orders: 150, price: '₹25/min', image: 'https://via.placeholder.com/80/FF5733/FFFFFF?text=D', expertise: ['Love', 'Education'] },
    { name: 'Astrologer E', language: 'Hindi', experience: '4 years', type: 'Palmistry', rating: 4.3, orders: 90, price: '₹18/min', image: 'https://via.placeholder.com/80/33FF57/FFFFFF?text=E', expertise: ['Health', 'Education'] },
    { name: 'Astrologer F', language: 'French', experience: '12 years', type: 'Vedic', rating: 4.9, orders: 300, price: '₹35/min', image: 'https://via.placeholder.com/80/3357FF/FFFFFF?text=F', expertise: ['Career', 'Love'] },
    { name: 'Astrologer G', language: 'English', experience: '6 years', type: 'Tarot', rating: 4.7, orders: 180, price: '₹22/min', image: 'https://via.placeholder.com/80/FF5733/FFFFFF?text=G', expertise: ['Love', 'Marriage'] },
    { name: 'Astrologer H', language: 'Hindi', experience: '8 years', type: 'Face Reading', rating: 4.6, orders: 210, price: '₹28/min', image: 'https://via.placeholder.com/80/33FF57/FFFFFF?text=H', expertise: ['Marriage', 'Career'] },
    { name: 'Astrologer I', language: 'English', experience: '5 years', type: 'Vedic', rating: 4.1, orders: 170, price: '₹19/min', image: 'https://via.placeholder.com/80/3357FF/FFFFFF?text=I', expertise: ['Career', 'Education'] },
    { name: 'Astrologer J', language: 'Spanish', experience: '3 years', type: 'Palmistry', rating: 4.4, orders: 130, price: '₹16/min', image: 'https://via.placeholder.com/80/FF5733/FFFFFF?text=J', expertise: ['Health', 'Love'] },
    { name: 'Astrologer K', language: 'Hindi', experience: '11 years', type: 'Tarot', rating: 4.9, orders: 260, price: '₹32/min', image: 'https://via.placeholder.com/80/33FF57/FFFFFF?text=K', expertise: ['Love', 'Education'] },
    { name: 'Astrologer L', language: 'French', experience: '9 years', type: 'Face Reading', rating: 4.5, orders: 230, price: '₹27/min', image: 'https://via.placeholder.com/80/3357FF/FFFFFF?text=L', expertise: ['Career', 'Health'] },
    { name: 'Astrologer M', language: 'English', experience: '7 years', type: 'Numerology', rating: 4.0, orders: 190, price: '₹24/min', image: 'https://via.placeholder.com/80/FF5733/FFFFFF?text=M', expertise: ['Love', 'Health'] },
    { name: 'Astrologer N', language: 'Hindi', experience: '10 years', type: 'Vedic', rating: 4.8, orders: 270, price: '₹30/min', image: 'https://via.placeholder.com/80/33FF57/FFFFFF?text=N', expertise: ['Career', 'Marriage'] },
    { name: 'Astrologer O', language: 'Spanish', experience: '6 years', type: 'Palmistry', rating: 4.3, orders: 160, price: '₹18/min', image: 'https://via.placeholder.com/80/3357FF/FFFFFF?text=O', expertise: ['Health', 'Career'] },
  ];

  const filterOptions = ['Love', 'Marriage', 'Career', 'Health', 'Education'];

  const applyFilter = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredAstrologers = selectedFilter
    ? astrologers.filter((astro) => astro.expertise.includes(selectedFilter))
    : astrologers;

  return (
    <View style={styles.container}>
      {/* Filter Buttons */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
        {filterOptions.map((filter, index) => (
          <TouchableOpacity key={index} onPress={() => applyFilter(filter)} style={styles.filterButton}>
            <Text style={styles.filterButtonText}>{filter}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Astrologer List */}
      <FlatList
        data={filteredAstrologers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.astroCard}>
            <View style={styles.imagedet}>
              
            <Image source={{ uri: item.image }} style={styles.astroImage} />
           
            <Text style={styles.astroRating}>Rating: {item.rating}</Text>
            <Text style={styles.astroOrders}>Orders: {item.orders}</Text>
            </View>
            <View style={styles.astroDetails}>
              <Text style={styles.astroName}>{item.name}</Text>
              <Text style={styles.astroLanguage}>Language: {item.language}</Text>
              <Text style={styles.astroExpertise}>Expertise: {item.expertise.join(', ')}</Text>
              <Text style={styles.astroExperience}>Experience: {item.experience}</Text>

              <Text style={styles.astroPrice}>{item.price}</Text>
            
            </View>
            <View style={styles.chatbutton}>
            <TouchableOpacity style={styles.freeChatButton}>
              
              <Text style={styles.freeChatButtonText}>Free Call</Text>
            </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  filterContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filterButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e74c3c',
  },
  filterButtonText: {
    color: '#e74c3c',
    fontSize: 14,
  },
  astroCard: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#e74c3c',
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
  },
  astroImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  astroDetails: {
    flex: 1,
  },
  astroName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  astroLanguage: {
    fontSize: 14,
    color: '#888',
  },
  astroExperience: {
    fontSize: 14,
    color: '#888',
  },
  astroType: {
    fontSize: 14,
    color: '#888',
  },
  astroRating: {
    fontSize: 14,
    color: '#111',
  },
  astroOrders: {
    fontSize: 14,
    color: '#f32d2d',
  },
  astroPrice: {
    fontSize: 18,
    color: '#6adb79',
  },
  astroExpertise: {
    fontSize: 14,
    color: '#888',
  },
  freeChatButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  freeChatButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight:"bold"
  },
  chatbutton:{
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    flexDirection: 'row',
  }
});

export default CallScreen;
