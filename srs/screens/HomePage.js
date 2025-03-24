import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const HomePage = ({ navigation, scanHistory }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AllerSense</Text>

      {/* Rectangular Image Below AllerSense */}
      <Image source={require('../assets/banner.png')} style={styles.bannerImage} />

      <Text style={styles.subtitle}>Recent Scans</Text>

      <FlatList
        data={scanHistory}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.rowContainer}>
            <View style={styles.boxContainer}>
              <Image source={{ uri: item }} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.smallTitle}>Snickers</Text>
                <Text style={styles.details}>Findings: Contain Peanuts, Tree Nuts</Text>
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.noImagesText}>No Scans Yet</Text>}
      />

      {/* Capture Button */}
      <TouchableOpacity style={styles.captureButton} onPress={() => navigation.navigate('ScanScreen')}>
        <Text style={styles.buttonText}>Scan Items</Text>
      </TouchableOpacity>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 20 },
  title: { fontSize: 33, fontWeight: 'bold', textAlign: 'center', marginBottom: 12 },
  bannerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 12,
    borderWidth: 2,       // Border width
    borderRadius: 12,     // Rounded corners
    borderColor: 'black', // Border color
    paddingVertical: 10,  // Padding inside the border
    paddingHorizontal: 20,
    shadowColor: '#000',  // Shadow color
    shadowOffset: { width: 2, height: 2 }, // Shadow direction
    shadowOpacity: 0.3,  // Shadow transparency
    shadowRadius: 4,     // Blur effect for shadow
    elevation: 5,  
  },
  subtitle: { fontSize: 18, fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: 9 },
  smallTitle: { fontSize: 14, backgroundColor: '#f8f8f8', fontWeight: 'bold' },
  details: { fontSize: 12, color: 'gray' },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35, // Circular Image
    marginRight: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  boxContainer: {
    width: '99%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8', 
    padding: 10,
    borderRadius: 25, // Circular border for the box
    shadowColor: '#000',  // Shadow color
    shadowOffset: { width: 2, height: 2 }, // Shadow direction
    shadowOpacity: 0.3,  // Shadow transparency
    shadowRadius: 4,     // Blur effect for shadow
    elevation: 5,  
  },
  textContainer: { flex: 1, justifyContent: 'center' },
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
