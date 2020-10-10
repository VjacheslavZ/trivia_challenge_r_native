import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const HomeScreen = ({
  navigation
}) => {
  const handlePressBegin = () => navigation.navigate('ConfigScreen');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to the</Text>
      <Text>Trivia  challenge</Text>

      <Text>You weill be presented with 10 True of False questions</Text>
      <Text>Can you score 100% ?</Text>

      <Button
        title="BEGIN"
        onPress={handlePressBegin}
      />
    </View>
  );
}
