// TopBar.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Modal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TopBar = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation(); 

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleOptionSelect = (option) => {
    toggleModal();
    if (option === 'Account') {
      navigation.navigate('Account'); // Navigate to the Account screen
    }
    if (option === "Logout") {
      navigation.navigate('Login');
    }
    // Add more option logic here if needed
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBar}>
        {/* Hamburger Icon */}
        <TouchableOpacity onPress={toggleModal}>
          <Ionicons name="menu" size={28} color="black" />
        </TouchableOpacity>

        {/* User Name */}
        <Text style={styles.username}>JohnDoe</Text>

        {/* Notification Bell */}
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={28} color="black" />
        </TouchableOpacity>

        {/* Balance */}
        <Text style={styles.balance}>Balance: $100</Text>
      </View>

      {/* Modal for Options */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView>
              <TouchableOpacity style={styles.modalOption} onPress={() => handleOptionSelect('Account')}>
                <Ionicons name="person-outline" size={24} color="black" />
                <Text style={styles.optionText}>Account</Text>
              </TouchableOpacity>
              <View style={styles.separator} />
              <TouchableOpacity style={styles.modalOption} onPress={() => handleOptionSelect('Logout')}>
                <Ionicons name="log-out-outline" size={24} color="black" />
                <Text style={styles.optionText}>Logout</Text>
              </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 32,
    backgroundColor: '#fff',
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: '600',
  },
  balance: {
    fontSize: 16,
    color: 'green',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white', // White background for modal
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5, // Shadow effect
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    width: '100%',
  },
  optionText: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
  },
  separator: {
    height: 1,
    width: '90%',
    backgroundColor: '#d3d3d3', // Light gray color for the separator
    marginVertical: 10,
  },
  closeButton: {
    marginTop: 20,
  },
  closeButtonText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default TopBar;
