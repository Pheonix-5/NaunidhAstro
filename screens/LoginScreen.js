// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Auth0 from 'react-native-auth0';
// import {auth0Config} from '../auth0Config'; // Import your Auth0 config

// const auth0 = new Auth0({ domain: auth0Config.domain, clientId: auth0Config.clientId });

// const LoginScreen = ({ navigation }) => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOtp] = useState('');
//   const [isOtpSent, setIsOtpSent] = useState(false);

//   // Function to send OTP
//   const handleLogin = async () => {
//     if (phoneNumber.length !== 10) {
//       Alert.alert('Error', 'Please enter a valid phone number');
//       return;
//     }
//     try {
//       await auth0.auth.passwordlessWithSMS({ phoneNumber: `+91${phoneNumber}`, connection: 'sms' });
//       setIsOtpSent(true);
//       Alert.alert('OTP Sent', 'Please check your phone for the OTP.');
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Error', error.message || 'Failed to send OTP. Please try again.');
//     }
//   };

//   // Function to verify OTP
//   const confirmOtp = async () => {
//     try {
//       const credentials = await auth0.auth.loginWithOTP({
//         username: `+91${phoneNumber}`,
//         otp,
//         connection: 'sms',
//       });
//       navigation.replace('MainApp'); // Navigate on successful login
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Error', 'Invalid OTP. Please try again.');
//     }
//   };

//   const handleSkip = () => {
//     navigation.navigate('MainApp');
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Astrology Banner */}
//       <Image source={require('../assets/icon.png')} style={styles.banner} />

//       {/* Title */}
//       <Text style={styles.title}>Login to Naunidh Astro</Text>

//       {/* Phone number input */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.countryCode}>+91</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Phone number"
//           keyboardType="phone-pad"
//           maxLength={10}
//           value={phoneNumber}
//           onChangeText={setPhoneNumber}
//         />
//       </View>

//       {/* OTP Input */}
//       {isOtpSent && (
//         <TextInput
//           style={[styles.input, { marginBottom: 20 }]}
//           placeholder="Enter OTP"
//           keyboardType="numeric"
//           maxLength={6}
//           value={otp}
//           onChangeText={setOtp}
//         />
//       )}

//       {/* Login Button */}
//       <TouchableOpacity style={styles.button} onPress={isOtpSent ? confirmOtp : handleLogin}>
//         <Text style={styles.buttonText}>{isOtpSent ? 'Verify OTP' : 'Send OTP'}</Text>
//       </TouchableOpacity>

//       {/* Skip Button */}
//       <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
//         <Text style={styles.skipText}>Skip</Text>
//       </TouchableOpacity>

//       {/* Free Chat Banner */}
//       <Text style={styles.firstChatText}>First Chat Free on Signup</Text>

//       {/* Features Row with Icons */}
//       <View style={styles.featuresRow}>
//         <View style={styles.feature}>
//           <Icon name="shield-lock-outline" size={40} color="#FF6F61" />
//           <Text style={styles.featureText}>Private & Confidential</Text>
//         </View>
//         <View style={styles.feature}>
//           <Icon name="account-check-outline" size={40} color="#FF6F61" />
//           <Text style={styles.featureText}>Verified Astrologers</Text>
//         </View>
//         <View style={styles.feature}>
//           <Icon name="lock-check-outline" size={40} color="#FF6F61" />
//           <Text style={styles.featureText}>Secure Payments</Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// // Your styles remain unchanged
// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   banner: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#CCCCCC',
//     borderRadius: 5,
//     marginBottom: 10,
//     padding: 10,
//   },
//   countryCode: {
//     marginRight: 10,
//     fontSize: 18,
//   },
//   input: {
//     flex: 1,
//     fontSize: 18,
//   },
//   button: {
//     backgroundColor: '#FF6F61',
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   skipButton: {
//     marginBottom: 20,
//   },
//   skipText: {
//     color: '#FF6F61',
//     fontSize: 16,
//   },
//   firstChatText: {
//     fontSize: 16,
//     marginBottom: 20,
//   },
//   featuresRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginTop: 20,
//   },
//   feature: {
//     alignItems: 'center',
//   },
//   featureText: {
//     marginTop: 5,
//     fontSize: 14,
//   },
// });

// export default LoginScreen;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Auth0 from 'react-native-auth0';
import { auth0Config } from '../auth0Config'; // Correct named import

const auth0 = new Auth0({ domain: auth0Config.domain, clientId: auth0Config.clientId });

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  // Function to send OTP
  const handleLogin = async () => {
    if (phoneNumber.length !== 10) {
      Alert.alert('Error', 'Please enter a valid phone number');
      return;
    }
    try {
      await auth0.auth.passwordlessWithSMS({ phoneNumber: `+91${phoneNumber}`, connection: 'sms' });
      setIsOtpSent(true);
      Alert.alert('OTP Sent', 'Please check your phone for the OTP.');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message || 'Failed to send OTP. Please try again.');
    }
  };

  // Function to verify OTP
  const confirmOtp = async () => {
    try {
      const credentials = await auth0.auth.loginWithOTP({
        username: `+91${phoneNumber}`,
        otp,
        connection: 'sms',
      });
      navigation.replace('MainApp'); // Navigate on successful login
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  const handleSkip = () => {
    navigation.navigate('MainApp');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Astrology Banner */}
      <Image source={require('../assets/icon.png')} style={styles.banner} />

      {/* Title */}
      <Text style={styles.title}>Login to Naunidh Astro</Text>

      {/* Phone number input */}
      <View style={styles.inputContainer}>
        <Text style={styles.countryCode}>+91</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone number"
          keyboardType="phone-pad"
          maxLength={10}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      {/* OTP Input */}
      {isOtpSent && (
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          placeholder="Enter OTP"
          keyboardType="numeric"
          maxLength={6}
          value={otp}
          onChangeText={setOtp}
        />
      )}

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={isOtpSent ? confirmOtp : handleLogin}>
        <Text style={styles.buttonText}>{isOtpSent ? 'Verify OTP' : 'Send OTP'}</Text>
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

// Your styles remain unchanged
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  banner: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  countryCode: {
    marginRight: 10,
    fontSize: 18,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#FF6F61',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  skipButton: {
    marginBottom: 20,
  },
  skipText: {
    color: '#FF6F61',
    fontSize: 16,
  },
  firstChatText: {
    fontSize: 16,
    marginBottom: 20,
  },
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  feature: {
    alignItems: 'center',
  },
  featureText: {
    marginTop: 5,
    fontSize: 14,
  },
});

export default LoginScreen;
