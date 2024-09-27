import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, Image, Dimensions, Text, StyleSheet, View, TouchableOpacity, ActivityIndicator, BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const ImageView = ({ route, navigation }) => {
  const { designId } = route.params;  // Fetch from navigate function
  const { width, height } = Dimensions.get('window');

  const [allImages, setAllImages] = useState([]); // Store both Design_image and related_images
  const [loading, setLoading] = useState(true);
  const [likedImages, setLikedImages] = useState({});

  // Toggle like functionality
  const toggleLike = (id) => {
    setLikedImages((prevLikedImages) => ({
      ...prevLikedImages,
      [id]: !prevLikedImages[id], // Toggle the like state for the given image id
    }));
  };

  // Fetch images based on design_id
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`http://192.168.29.161/my_api_server/fetch_images.php?design_id=${designId}`);
        const json = await response.json();
        
        if (json.status) {
          const { Design_image, images } = json.data;  // Fetch design image and related images

          // Handle the case where one of the `images` items is a JSON string
          let relatedImages = images.map((img) => {
            try {
              return JSON.parse(img);  // Try to parse if it's a JSON string
            } catch (error) {
              return img; // If not a string, return the original image
            }
          });

          // Flatten the array if it contains nested arrays
          relatedImages = relatedImages.flat();

          // Prepend the design image to the list of all images
          setAllImages([Design_image, ...relatedImages]);
        } else {
          alert('No related images found.');
        }
      } catch (error) {
        console.error('Error fetching related images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [designId]);

  const handleBackPress = useCallback(() => {
    navigation.navigate('Category'); // Navigate back to home
    return true;
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
      return () => backHandler.remove();
    }, [handleBackPress])
  );

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : allImages.length > 0 ? (
        <FlatList
          data={allImages}  // Use the combined array of images
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View style={{ width, height }}>
              <Image source={{ uri: item }} style={{ width, height: height * 0.75 }} resizeMode="contain" />
              <Text style={styles.title}>Image {index + 1}</Text>
              <TouchableOpacity onPress={() => toggleLike(index)}>
                <Image
                  source={likedImages[index] ? require('../assets/icons/heart_filled.png') : require('../assets/icons/heart.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text>No images found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    color: 'black',
  },
  icon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default ImageView;
