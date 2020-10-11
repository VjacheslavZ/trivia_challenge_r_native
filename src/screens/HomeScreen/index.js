import React from 'react';
import { Button, Text, Container, View } from 'native-base';

import { styles } from "./styles";

export const HomeScreen = ({
  navigation
}) => {
  const handlePressBegin = () => navigation.navigate('ConfigScreen');

  return (
    <Container style={styles.container}>
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

      <Button block onPress={handlePressBegin}>
        <Text>BEGIN</Text>
      </Button>
    </Container>
  );
}
