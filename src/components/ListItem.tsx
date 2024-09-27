import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ListItem = ({ title, image }:any) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ListItem;
