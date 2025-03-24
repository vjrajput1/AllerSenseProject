import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const { height } = Dimensions.get('window'); // Get screen height

const ResultScreen = ({ route, navigation }) => {
  const { capturedImage } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Captured Image</Text>

        {capturedImage ? (
          <Image source={{ uri: capturedImage }} style={styles.image} />
        ) : (
          <Text style={styles.errorText}>No Image Captured</Text>
        )}
      </ScrollView>

      {/* OK Button (Same style as Capture button) */}
      <TouchableOpacity style={styles.okButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F5F5F5', 
    paddingHorizontal: 20, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  scrollContainer: { 
    alignItems: 'center', 
    paddingBottom: 100 // Ensures space for the OK button
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginVertical: 20 
  },
  image: { 
    width: '100%', 
    height: height * 0.5, // Set image height to 50% of screen height
    borderRadius: 10, 
    marginBottom: 20 
  },
  errorText: { 
    fontSize: 18, 
    color: 'red', 
    textAlign: 'center', 
    marginTop: 20 
  },
  okButton: {
    backgroundColor: '#000', // Black color (same as Capture button)
    width: '70%', // Same width as Capture button
    paddingVertical: 15, // Same padding as Capture button
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 40, // Ensures button is visible
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
});

export default ResultScreen;
