import React  from 'react';
import {
  Container,
  Text,
  View,
  Content,
  List,
  ListItem,
  Button,
} from 'native-base';

import { styles } from "./styled";

export const ScoreScreenComponent = ({
 answers,
 navigation,
 clearAnswers,
}) => {
  let score = 0;

  const result = answers.map(({ question, correct_answer, userAnswer }) => {
    const isCorrectAnswer = JSON.parse(correct_answer.toLowerCase()) === userAnswer;
    if (isCorrectAnswer) {
      score += 1;
    }
    return (
      <ListItem key={question}>
        {isCorrectAnswer ?
          <Text style={styles.isCorrect}>+</Text> :
          <Text style={styles.isCorrect}>-</Text>}
        <Text>{question}</Text>
      </ListItem>
    )
  })

  const handlePressButton = () => {
    clearAnswers();
    navigation.navigate('ConfigScreen')
  };

  return (
    <Container style={styles.container}>
      <Content>
        <View style={styles.result}>
          <Text>You scored</Text>
          <Text>{score} / {answers.length}</Text>
        </View>

        <List>
          {result}
        </List>

        <View style={styles.buttonContainer}>
          <Button block onPress={handlePressButton}>
            <Text>Play Again</Text>
          </Button>
        </View>
      </Content>
    </Container>
  )
};
