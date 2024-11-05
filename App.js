// App.js

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet } from 'react-native';
import Questionnaire from './src/components/Questionnaire';
import Results from './src/components/Results';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen 
            name="Questionnaire" 
            component={QuestionnaireScreen} 
            options={{ title: 'Roof Calculator' }}
          />
          <Stack.Screen 
            name="Results" 
            component={ResultsScreen}
            options={{ title: 'Estimate Results' }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

function QuestionnaireScreen({ navigation }) {
  const handleComplete = (calculations) => {
    navigation.navigate('Results', { calculations });
  };

  return <Questionnaire onComplete={handleComplete} />;
}

function ResultsScreen({ route, navigation }) {
  const { calculations } = route.params;
  
  const handleConfirm = () => {
    // Here you would implement order confirmation logic
    alert('Order confirmed! We will contact you shortly.');
  };

  return <Results calculations={calculations} onConfirm={handleConfirm} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});