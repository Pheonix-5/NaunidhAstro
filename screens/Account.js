// Account.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Account = () => {
  return (
    <View style={styles.container}>
      {/* Default Profile Image */}
      <Image
        source={{ uri: 'https://via.placeholder.com/100' }} // Use any default image URL
        style={styles.profileImage}
      />
      <Text style={styles.username}>John Doe</Text>
      <Text style={styles.balance}>Balance: $100</Text>
      <Text style={styles.email}>Email: johndoe@example.com</Text>
      <Text style={styles.phone}>Phone: +1234567890</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  balance: {
    fontSize: 18,
    color: 'green',
  },
  email: {
    fontSize: 16,
    marginVertical: 5,
  },
  phone: {
    fontSize: 16,
  },
});

export default Account;
