import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const HomePage = ({ navigation, scanHistory }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AllerSense</Text>
      <Text style={styles.subtitle}>Recent Scans</Text>

      {/* Display list of scanned images */}
      <FlatList
        data={scanHistory}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
        ListEmptyComponent={<Text style={styles.noImagesText}>No Scans Yet</Text>}
      />

      {/* Image and Text in Row */}
      <View style={styles.rowContainer}>
        <Image
          source={{ uri: 'https://your-image-url-here.com' }} // Replace with your image URL
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.smallTitle}>Kitkat Classic</Text>  {/* Smaller font for Kitkat Classic */}
          <Text style={styles.details}>Findings: Contain Peanuts, Tree Nuts</Text>
        </View>
      </View>

      {/* Capture Button */}
      <TouchableOpacity style={styles.captureButton} onPress={() => navigation.navigate('ScanScreen')}>
        <Text style={styles.buttonText}>Scan Items</Text>
      </TouchableOpacity>
    </View>
  );
};

const { width } = Dimensions.get('window');  // Get screen width to make responsive design

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 20 },
  title: { fontSize: 33, fontWeight: 'bold', textAlign: 'center', marginBottom: 12 },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginTop: 9,
    marginBottom: 9,
  },
  smallTitle: {
    fontSize: 14,  // Smaller font size for the Kitkat Classic text
    fontWeight: 'bold',  // Optional: make it bold if desired
  },
  details: {
    fontSize: 12,  // Smaller font for the details
    color: 'gray',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
    marginTop: 6,
    marginBottom: 6,  // Add space between the image and the text
  },
  rowContainer: {
    flexDirection: 'row',  // Align image and text in a row
    alignItems: 'center',  // Vertically align both items
    marginBottom: 20,  // Optional: space between image-text and next content
    marginTop: 10,  // Optional: space between previous content and row
  },
  textContainer: {
    flex: 1,             // Take the remaining space
    justifyContent: 'center', // Vertically center text
  },
  noImagesText: { textAlign: 'center', fontSize: 18, color: 'gray', marginTop: 20 },
  captureButton: {
    backgroundColor: '#000',
    width: '70%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default HomePage;
