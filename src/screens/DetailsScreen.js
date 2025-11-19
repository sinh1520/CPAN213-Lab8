import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Get the 'route' object to access parameters
const DetailsScreen = ({ route, navigation }) => {

  const { itemId, itemName } = route.params || { itemId: 'N/A', itemName: 'N/A' };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text style={styles.text}>Item ID: {itemId}</Text>
      <Text style={styles.text}>Item Name: {itemName}</Text> 
      
      <Button 
        title="Update Params"
        onPress={() => {
          navigation.setParams({ 
            itemName: 'Updated Item',
          });
        }}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20, 
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
  },
  text: {
    fontSize: 16, 
    marginBottom: 10, 
  },
});

export default DetailsScreen; 