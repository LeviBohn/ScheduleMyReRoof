// src/components/Results.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Results = ({ calculations, onConfirm }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Roof Replacement Estimate</Text>
      
      <View style={styles.resultItem}>
        <Text style={styles.label}>Total Roof Area:</Text>
        <Text style={styles.value}>{calculations.totalAreaSqFt} sq ft</Text>
      </View>

      <View style={styles.resultItem}>
        <Text style={styles.label}>Squares Needed:</Text>
        <Text style={styles.value}>{calculations.squaresNeeded} squares</Text>
      </View>

      <View style={styles.resultItem}>
        <Text style={styles.label}>Total Price:</Text>
        <Text style={styles.value}>${calculations.customerPrice.toLocaleString()}</Text>
      </View>

      <Button 
        title="Schedule Roof Replacement" 
        onPress={onConfirm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Results;