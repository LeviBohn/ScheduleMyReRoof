// src/components/Questionnaire.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { RoofCalculator } from '../services/roofCalculations';

const Questionnaire = ({ onComplete }) => {
  const [mainArea, setMainArea] = useState('');
  const [garageArea, setGarageArea] = useState('');

  const handleSubmit = () => {
    const calculator = new RoofCalculator(
      parseFloat(mainArea) || 0,
      parseFloat(garageArea) || 0
    );

    const calculations = calculator.getAllCalculations();
    
    onComplete({
      ...calculations,
      mainArea: parseFloat(mainArea),
      garageArea: parseFloat(garageArea)
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Main House Area (sq ft):</Text>
      <TextInput
        style={styles.input}
        value={mainArea}
        onChangeText={setMainArea}
        keyboardType="numeric"
        placeholder="e.g., 1836"
      />

      <Text style={styles.label}>Garage Area (sq ft):</Text>
      <TextInput
        style={styles.input}
        value={garageArea}
        onChangeText={setGarageArea}
        keyboardType="numeric"
        placeholder="e.g., 504"
      />

      <Button title="Calculate Estimate" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default Questionnaire;