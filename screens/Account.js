import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Account = () => {
  const [gender, setGender] = useState('male');
  const [imageUri, setImageUri] = useState('https://via.placeholder.com/100');
  const [formData, setFormData] = useState({
    name: 'JhonDoe',
    dob: '',
    timeOfBirth: '',
    placeOfBirth: '',
    currentAddress: '',
    city: '',
    pincode: '',
    phone: '',
    email: '',
  });

  const handleImageChange = () => {
    // This should be replaced with actual image picker logic
    Alert.alert('Image Change', 'Image change functionality is not implemented yet.');
  };

  const handleSubmit = () => {
    Alert.alert('Profile Updated', 'Your profile has been updated!');
    console.log(formData);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Background Image */}
        <View style={styles.background}>
          {/* Profile Image */}
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={handleImageChange}>
              <Image source={{ uri: imageUri }} style={styles.profileImage} />
              <Icon name="camera" size={30} color="#fff" style={styles.cameraIcon} />
            </TouchableOpacity>
          </View>

          {/* Personal Details Form */}
          <View style={styles.formContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              placeholder="Enter your name"
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
              style={styles.input}
            />

                  {/* Gender Radio Button */}
                  <View style={styles.genderContainer}>
              <Text style={styles.label}>Gender:</Text>
              <View style={styles.radioButtonContainer}>
                <RadioButton
                  value="male"
                  status={gender === 'male' ? 'checked' : 'unchecked'}
                  onPress={() => setGender('male')}
                />
                <Text>Male</Text>
                <RadioButton
                  value="female"
                  status={gender === 'female' ? 'checked' : 'unchecked'}
                  onPress={() => setGender('female')}
                />
                <Text>Female</Text>
              </View>
            </View>

            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              placeholder="DD/MM/YYYY"
              value={formData.dob}
              onChangeText={(text) => setFormData({ ...formData, dob: text })}
              style={styles.input}
            />

            <Text style={styles.label}>Time of Birth</Text>
            <TextInput
              placeholder="Enter your time of birth"
              value={formData.timeOfBirth}
              onChangeText={(text) => setFormData({ ...formData, timeOfBirth: text })}
              style={styles.input}
            />

            <Text style={styles.label}>Place of Birth</Text>
            <TextInput
              placeholder="Enter your place of birth"
              value={formData.placeOfBirth}
              onChangeText={(text) => setFormData({ ...formData, placeOfBirth: text })}
              style={styles.input}
            />

            <Text style={styles.label}>Current Address</Text>
            <TextInput
              placeholder="Enter your current address"
              value={formData.currentAddress}
              onChangeText={(text) => setFormData({ ...formData, currentAddress: text })}
              style={styles.input}
            />

            <Text style={styles.label}>City</Text>
            <TextInput
              placeholder="Enter your city"
              value={formData.city}
              onChangeText={(text) => setFormData({ ...formData, city: text })}
              style={styles.input}
            />

            <Text style={styles.label}>Pincode</Text>
            <TextInput
              placeholder="Enter your pincode"
              value={formData.pincode}
              onChangeText={(text) => setFormData({ ...formData, pincode: text })}
              style={styles.input}
            />

            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              placeholder="Enter your phone number"
              value={formData.phone}
              onChangeText={(text) => setFormData({ ...formData, phone: text })}
              style={styles.input}
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="Enter your email"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              style={styles.input}
            />

            {/* Update Profile Button */}
            <TouchableOpacity onPress={handleSubmit} style={styles.updateButton}>
              <Text style={styles.updateButtonText}>Update Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Remove default white background
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  background: {
 // Dark background for astrology feel
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 15,
    padding: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red', // Red label color for easy identification
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 16,
  },
  genderContainer: {
    marginBottom: 20,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  updateButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Account;
