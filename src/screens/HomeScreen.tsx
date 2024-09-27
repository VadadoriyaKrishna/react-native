  // import React, {useState, useEffect } from 'react';
  // import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView, BackHandler, Alert } from 'react-native';

  // // const categories = [
  // //   { id: 1, title: 'Simple Rangoli', image: require('../assets/image1.jpeg') },
  // //   { id: 2, title: 'Festival Rangoli', image: require('../assets/image2.jpeg') },
  // //   { id: 3, title: 'Color Rangoli', image: require('../assets/image2.jpeg') },
  // //   { id: 4, title: 'Diwali Rangoli', image: require('../assets/image1.jpeg') },
  // //   { id: 5, title: 'Border Rangoli', image: require('../assets/image1.jpeg') },
  // //   { id: 6, title: 'Dotted Rangoli', image: require('../assets/image2.jpeg') },
  // //   { id: 7, title: 'Poster Rangoli', image: require('../assets/image2.jpeg') },
  // //   { id: 8, title: 'Rose Rangoli', image: require('../assets/image1.jpeg') },
  // //   { id: 9, title: 'Holi Rangoli', image: require('../assets/image2.jpeg') },
  // //   { id: 10, title: 'Festival Rangoli', image: require('../assets/image1.jpeg') },
  // //   // Add other categories here

  // // ];




  // const HomeScreen = ({ navigation }) => {
  //   const [categories, setCategories] = useState([]);
  //   const [loading, setLoading] = useState(true);
    

  //   const { width } = Dimensions.get('window');
  //   const itemWidth = (width - 40) / 2;

  //     // Fetching data from the API
  //     useEffect(() => {
  //       const fetchCategories = async () => {
  //         try {
  //           const response = await fetch('http://192.168.29.161/my_api_server/categories.php'); // Replace with your API URL
  //           const json = await response.json();
  //           // console.log(json.data);
  //           setCategories(json.data);
  //         } catch (error) {
  //           console.error(error);
  //         } finally {
  //           setLoading(false);
  //         }
  //       };
    
  //       fetchCategories();
  //     }, []);
    

    // useEffect(() => {
    //   const backAction = () => {
    //     Alert.alert('Hold on!', 'Are you sure you want to exit?', [
    //       {
    //         text: 'Cancel',
    //         onPress: () => null,
    //         style: 'cancel',
    //       },
    //       {
    //         text: 'YES',
    //         onPress: () => BackHandler.exitApp(),
    //       },
    //     ]);
    //     return true; // Prevent default back button behavior
    //   };

    //   const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    //   // Cleanup the event listener on unmount
    //   return () => backHandler.remove();
    // }, []);

  //   return (
  //     <ScrollView>
        
  //       {/* <View style={styles.container}>
  //         {categories.map((category) => (
  //           <TouchableOpacity
  //             key={category.id}
  //             style={[styles.itemContainer, { width: itemWidth }]}
  //             onPress={() => navigation.navigate('Category', { categoryId: category.id, title: category.title })}
  //           >
  //             <Image source={category.image} style={styles.image} />
  //             <Text style={styles.title}>{category.title}</Text>
  //           </TouchableOpacity>
  //         ))}
  //       </View> */}
  //       <View style={styles.container}>
  //         {categories.map((category) => (
  //           <TouchableOpacity
  //             key={category.category_id}
  //             style={[styles.itemContainer, { width: itemWidth }]}
  //             onPress={() =>
  //               navigation.navigate('Category', {
  //                 categoryId: category.category_id,
  //                 title: category.category_name,
  //               })
  //             }
  //           >
  //             <Image source={{ uri: category.category_img_url }} style={styles.image} />
  //             <Text style={styles.title}>{category.category_name}</Text>
  //           </TouchableOpacity>
  //         ))}
  //       </View>
  //     </ScrollView>
  //   );
  // };

  // const styles = StyleSheet.create({
  //   container: {
  //     flexDirection: 'row',
  //     flexWrap: 'wrap',
  //     justifyContent: 'space-between',
  //     padding: 10,
  //   },
  //   itemContainer: {
  //     marginBottom: 20,
  //     backgroundColor: '#fff',
  //     borderRadius: 10,
  //     padding: 10,
  //   },
  //   image: {
  //     width: '100%',
  //     height: 150,
  //     borderRadius: 10,
  //   },
  //   title: {
  //     marginTop: 10,
  //     textAlign: 'center',
  //     fontWeight: 'bold',
  //     color: 'black',
  //   },
  // });

  // export default HomeScreen;

//   import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, ActivityIndicator, BackHandler,Alert } from 'react-native';

// const HomeScreen = ({ navigation }) => {
//   const [categories, setCategories] = useState([]);
//   const [page, setPage] = useState(1);   // Keep track of the current page
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true); // To determine if more data can be loaded

//   // Fetch data from the API
//   const fetchCategories = async () => {
//     if (loading) return;

//     setLoading(true);
//     try {
//       const response = await fetch(`http://192.168.29.161/my_api_server/categories.php?page=${page}&limit=6`);
//       const json = await response.json();

//       if (json.data.length > 0) {
//         setCategories(prevCategories => [...prevCategories, ...json.data]);  // Append new data
//         setPage(prevPage => prevPage + 1);  // Increase page number for next fetch
//       } else {
//         setHasMore(false);  // No more data to load
//       }
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch initial data on mount
//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   // Render a single category item
//   const renderCategoryItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.itemContainer}

//       onPress={() => 
//         navigation.navigate('Category', { categoryId: item.category_id, title: item.category_name })}
//     >
//       <Image source={{ uri: item.category_img_url }} style={styles.image} />
//       <Text style={styles.title}>{item.category_name}</Text>
//     </TouchableOpacity>
//   );

  
//   useEffect(() => {
//     const backAction = () => {
//       Alert.alert('Hold on!', 'Are you sure you want to exit?', [
//         {
//           text: 'Cancel',
//           onPress: () => null,
//           style: 'cancel',
//         },
//         {
//           text: 'YES',
//           onPress: () => BackHandler.exitApp(),
//         },
//       ]);
//       return true; // Prevent default back button behavior
//     };

//     const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

//     // Cleanup the event listener on unmount
//     return () => backHandler.remove();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={categories}
//         renderItem={renderCategoryItem}
//         keyExtractor={(item) => item.category_id.toString()}  // Ensure each key is unique
//         numColumns={2}
//         onEndReached={() => {
//           if (hasMore) fetchCategories();  // Load more when the end of the list is reached
//         }}
//         onEndReachedThreshold={0.5}   // When to trigger load more (0.5 = halfway down)
//         ListFooterComponent={() => loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}  // Loading indicator at bottom
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   itemContainer: {
//     flex: 1,
//     margin: 10,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 10,
//   },
//   image: {
//     width: '100%',
//     height: 150,
//     borderRadius: 10,
//   },
//   title: {
//     marginTop: 10,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     color: 'black',
//   },
// });

// export default HomeScreen;


  import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, ActivityIndicator, BackHandler,Alert } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);   // Keep track of the current page
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // To determine if more data can be loaded

  // Fetch data from the API
  const fetchCategories = async () => {
    if (loading) return;

    setLoading(true);
    try {
      // const response = await fetch(`http://192.168.29.161/my_api_server/categories.php?page=${page}&limit=6`);
      const response = await fetch(`http://192.168.29.161/my_api_server/fetch_category.php?page=${page}&limit=2`);
      const json = await response.json();
      // console.log(json);

      if (json.data.length > 0) {
        setCategories(prevCategories => [...prevCategories, ...json.data]);  // Append new data
        setPage(prevPage => prevPage + 1);  // Increase page number for next fetch
      } else {
        setHasMore(false);  // No more data to load
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial data on mount
  useEffect(() => {
    fetchCategories();
  }, []);

  // Render a single category item
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}

      onPress={() => 
        navigation.navigate('Category', { categoryId: item.Category_id, title: item.Category_name })}
    >
      <Image source={{ uri: item.Category_image }} style={styles.image} />
      <Text style={styles.title}>{item.Category_name}</Text>
    </TouchableOpacity>
  );

  
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => BackHandler.exitApp(),
        },
      ]);
      return true; // Prevent default back button behavior
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    // Cleanup the event listener on unmount
    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.category_id}  // Ensure each key is unique
        numColumns={2}
        onEndReached={() => {
          if (hasMore) fetchCategories();  // Load more when the end of the list is reached
        }}
        onEndReachedThreshold={0.5}   // When to trigger load more (0.5 = halfway down)
        ListFooterComponent={() => loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}  // Loading indicator at bottom
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
});

export default HomeScreen;

