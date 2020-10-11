import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from "./styles";

export const HomeScreen = ({
  navigation
}) => {
  const handlePressBegin = () => navigation.navigate('ConfigScreen');

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Welcome to the
        </Text>
        <Text style={styles.title}>
          Trivia  challenge
        </Text>
      </View>

      <Text style={styles.info}>
        You weill be presented with 10 True of False questions
      </Text>

      <Text style={styles.info}>Can you score 100% ?</Text>

      <Button
        title="BEGIN"
        onPress={handlePressBegin}
      />
    </View>
  );
}
