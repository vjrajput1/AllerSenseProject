import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const ResultScreen = ({ route, navigation }) => {
  const { capturedImage } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Scan Result</Text>

        {capturedImage ? (
          <>
            <Image source={{ uri: capturedImage }} style={styles.image} />
            
            {/* Results Container */}
            <View style={styles.resultsContainer}>
              <Text style={styles.productName}>Snickers</Text>
              <Text style={styles.sectionTitle}>Contains:</Text>
              
              <View style={styles.allergenItem}>
                <View style={styles.circle} />
                <Text style={styles.allergenText}>Peanuts</Text>
              </View>
              
              <View style={styles.allergenItem}>
                <View style={styles.circle} />
                <Text style={styles.allergenText}>Tree Nuts</Text>
              </View>
            </View>
          </>
        ) : (
          <Text style={styles.errorText}>No Image Captured</Text>
        )}
      </ScrollView>

      <TouchableOpacity 
        style={styles.okButton} 
        onPress={() => navigation.navigate('HomePage')}
      >
        <Text style={styles.buttonText}>DONE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff'
  },
  scrollContainer: { 
    alignItems: 'center', 
    paddingBottom: 100 
  },
  title: { 
    fontSize: 28, 
    fontWeight: '800', 
    marginVertical: 25,
    color: '#333'
  },
  image: { 
    width: width * 0.9,
    height: height * 0.4,
    borderRadius: 12,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
  resultsContainer: {
    width: width * 0.9,
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  productName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginBottom: 15
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginBottom: 1
  },
  allergenItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginLeft: 5
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#e74c3c',
    marginRight: 12
  },
  allergenText: {
    fontSize: 17,
    color: '#666'
  },
  errorText: { 
    fontSize: 18, 
    color: 'red', 
    textAlign: 'center', 
    marginTop: 20 
  },
  okButton: {
    backgroundColor: '#000',
    width: width * 0.9,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center'
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: '600' 
  },
});

export default ResultScreen;