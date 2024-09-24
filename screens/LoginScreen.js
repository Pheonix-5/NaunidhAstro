// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = () => {
    // Implement your OTP logic here (you can also skip this for now)
    navigation.replace('MainApp'); // Navigate to the tab navigation
  };

  const handleSkip = () => {
    navigation.navigate('MainApp');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Astrology Banner */}
      <Image
        source={require('../assets/icon.png')}
        style={styles.banner}
      />

      {/* Title */}
      <Text style={styles.title}>Login to Naunidh Astro</Text>

      {/* Phone number input */}
      <View style={styles.inputContainer}>
        <Text style={styles.countryCode}>+91</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>

      {/* Skip Button */}
      <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Free Chat Banner */}
      <Text style={styles.firstChatText}>First Chat Free on Signup</Text>

      {/* Features Row with Icons */}
      <View style={styles.featuresRow}>
        <View style={styles.feature}>
          <Icon name="shield-lock-outline" size={40} color="#FF6F61" />
          <Text style={styles.featureText}>Private & Confidential</Text>
        </View>
        <View style={styles.feature}>
          <Icon name="account-check-outline" size={40} color="#FF6F61" />
          <Text style={styles.featureText}>Verified Astrologers</Text>
        </View>
        <View style={styles.feature}>
          <Icon name="lock-check-outline" size={40} color="#FF6F61" />
          <Text style={styles.featureText}>Secure Payments</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;


const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f9f9f9',
    },
    banner: {
      width: '70%',
      height: 200,
      marginBottom: 30,
      borderRadius: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: '600',
      marginBottom: 30,
      color: '#333',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 20,
      backgroundColor: '#fff',
      width: '100%',
    },
    countryCode: {
      fontSize: 16,
      color: '#333',
    },
    input: {
      flex: 1,
      fontSize: 16,
      paddingHorizontal: 10,
      height: 45,
    },
    button: {
      backgroundColor: '#FF6F61',
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 8,
      width: '100%',
      alignItems: 'center',
      marginBottom: 15,
      elevation: 2,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '500',
    },
    skipButton: {
      marginBottom: 20,
    },
    skipText: {
      color: '#FF6F61',
      fontSize: 16,
      fontWeight: '500',
    },
    firstChatText: {
      fontSize: 14,
      color: '#777',
      marginBottom: 30,
    },
    featuresRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    feature: {
      flex: 1,
      alignItems: 'center',
    },
    featureText: {
      fontSize: 12,
      textAlign: 'center',
      marginTop: 5,
      color: '#333',
    },
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f9f9f9',
    },
    mainTitle: {
      fontSize: 28,
      fontWeight: '600',
      marginBottom: 20,
      color: '#333',
    },
    subtitle: {
      fontSize: 16,
      color: '#777',
      marginBottom: 40,
    },
    chatButton: {
      backgroundColor: '#FF6F61',
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 8,
      width: '60%',
      alignItems: 'center',
      elevation: 3,
    },
    chatButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '500',
    },
  });
  
