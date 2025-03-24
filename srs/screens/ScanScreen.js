import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';

const ScanScreen = ({ navigation, setScanHistory }) => {
  const device = useCameraDevice('back');
  const { hasPermission, requestPermission } = useCameraPermission();
  const cameraRef = useRef(null);

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Camera permission required</Text>
        <TouchableOpacity
          style={styles.permissionButton}
          onPress={async () => {
            const status = await requestPermission();
            if (!status) {
              Alert.alert('Permission Denied', 'Please enable camera permission in settings.');
            }
          }}
        >
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!device) {
    return <Text style={styles.errorText}>No camera device found</Text>;
  }

  const captureImage = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePhoto();
        setScanHistory(prevHistory => [...prevHistory, `file://${photo.path}`]);

        navigation.navigate('ResultScreen', { capturedImage: `file://${photo.path}` });
      } catch (error) {
        console.error('Error capturing image:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Camera ref={cameraRef} style={StyleSheet.absoluteFill} device={device} isActive={true} photo={true} />
      
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>←</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.captureButton} onPress={captureImage}>
        <Text style={styles.buttonText}>Capture</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  captureButton: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#000',
    width: '70%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  permissionButton: {
    marginTop: 20,
    backgroundColor: '#FF3B30',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  errorText: { fontSize: 18, color: '#000', textAlign: 'center', marginTop: 20 },
});

export default ScanScreen;
