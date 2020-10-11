import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const QuizScreenComponent = ({
  diifficulty,
  category,
}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{diifficulty}</Text>
      <Text>{category}</Text>
    </View>
  );
}
