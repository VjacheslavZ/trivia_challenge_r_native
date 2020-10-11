import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const ConfigGameScreenComponent = ({
  navigation,
  getConfigGame,
}) => {
  useEffect(() => {
    getConfigGame()
  }, [])
  return (
    <View>
      <Text>Config game screen</Text>
    </View>
  )
}
