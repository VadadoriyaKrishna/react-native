
import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, BackHandler, ActivityIndicator, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const CategoryScreen = ({ route, navigation }) => {
  const { categoryId, title } = route.params || {};
  const { width } = Dimensions.get('window');
  const itemWidth = (width - 40) / 2;
  const itemHeight = 150;

  const [images, setImages] = useState([]);
  const [designIds, setDesignIds] = useState([]); // Changed to store an array of design IDs
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const limit = 2; // Number of items to load per page

  const fetchCategoryImages = async (pageNumber) => {
    try {
      if (pageNumber === 1) setLoading(true);
      else setLoadingMore(true);

      const response = await fetch(`http://192.168.29.161/my_api_server/fetch_designs.php?category_id=${categoryId}&page=${pageNumber}&limit=${limit}`);
      const json = await response.json();
      console.log('json data___', json);

      if (json.status) {
        const newImages = json.data.map((item) => item.Design_image); // Map over the images
        const newDesignIds = json.data.map((item) => item.Design_id); // Map over design IDs
        console.log('Design IDs:', newDesignIds);

        if (newImages.length < limit) setHasMore(false);

        // Append new images and design IDs to existing lists
        setImages((prevImages) => [...prevImages, ...newImages]);
        setDesignIds((prevDesignIds) => [...prevDesignIds, ...newDesignIds]);

        if (pageNumber === 1 && newImages.length === 0) {
          Alert.alert('No Data Found', 'No images are available for this category.');
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching category images:', error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (isInitialLoad || categoryId) {
        setImages([]); // Reset images
        setDesignIds([]); // Reset design IDs
        setPage(1);
        setHasMore(true);
        setLoading(true);
        fetchCategoryImages(1); // Load first page
        setIsInitialLoad(false);
      }
    }, [categoryId])
  );

  const loadMoreImages = () => {
    if (!loadingMore && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchCategoryImages(nextPage); // Load the next page
    }
  };

  const handleBackPress = useCallback(() => {
    navigation.navigate('Home'); // Navigate back to home
    return true;
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
      return () => backHandler.remove();
    }, [handleBackPress])
  );

  const renderImageItem = ({ item, index }) => (
    <TouchableOpacity
      key={index}
      style={[styles.itemContainer, { width: itemWidth, height: itemHeight + 40 }]}
      onPress={() => {
        navigation.navigate('ImageView', {
          designId: designIds[index],  // Pass the correct design ID for the current image
          images,
          initialIndex: index,
        });
      }}
    >
      <Image source={{ uri: item }} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      {loading && page === 1 ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={images}
          renderItem={renderImageItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={styles.gridContainer}
          onEndReached={loadMoreImages}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loadingMore ? <ActivityIndicator size="large" color="#0000ff" /> : null}
        />
      )}
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  gridContainer: {
    paddingBottom: 20,
  },
});

export default CategoryScreen;

