import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageViewScreen = ({ route, navigation }) => {
  const { image, title } = route.params; // Receive the image and title from the previous screen

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.fullImage} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '100%',
    height: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default ImageViewScreen;
