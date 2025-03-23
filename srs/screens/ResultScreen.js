import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultScreen = ({ route }) => {
  const { capturedImage } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Captured Image</Text>
      {capturedImage ? (
        <Image source={{ uri: `file://${capturedImage}` }} style={styles.image} />
      ) : (
        <Text style={styles.errorText}>No Image Captured</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  image: { width: 300, height: 400, borderRadius: 10 },
  errorText: { fontSize: 18, color: 'red', textAlign: 'center', marginTop: 20 },
});

export default ResultScreen;
