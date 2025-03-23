import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

const ScanScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [photoUri, setPhotoUri] = useState(null);
  const devices = useCameraDevices();
  const device = devices.back;
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  const captureImage = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePhoto();
        setPhotoUri(photo.path);
        navigation.navigate('ResultScreen', { capturedImage: photo.path });
      } catch (error) {
        console.error('Error capturing image:', error);
      }
    }
  };

  if (!hasPermission) {
    return <Text style={styles.errorText}>Camera permission required</Text>;
  }

  if (!device) {
    return <Text style={styles.errorText}>No camera device found</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        device={device}
        isActive={true}
        photo={true}
      />
      <TouchableOpacity style={styles.captureButton} onPress={captureImage}>
        <Text style={styles.buttonText}>Capture</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  camera: { width: '100%', height: '80%' },
  captureButton: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  errorText: { fontSize: 18, color: 'red', textAlign: 'center', marginTop: 20 },
});

export default ScanScreen;
