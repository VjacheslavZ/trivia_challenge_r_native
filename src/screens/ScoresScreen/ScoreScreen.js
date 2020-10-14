import React  from 'react';
import {
  Container,
  Text,
  View,
  Content,
  List,
  ListItem
} from 'native-base';

export const ScoreScreenComponent = ({
 answers,
}) => {
  let score = 0;

  const result = answers.map(({ question, correct_answer, userAnswer }) => {
    const isCorrectAnswer = JSON.parse(correct_answer.toLowerCase()) === userAnswer;
    if (isCorrectAnswer) {
      score += 1;
    }
    return (
      <ListItem key={question}>
        {isCorrectAnswer ? <Text>+</Text>:<Text>-</Text>}
        <Text>{question}</Text>
      </ListItem>
    )
  })

  return (
    <Container>
      <Content>
        <View>
          <Text>You scored</Text>
          <Text>{score} / {answers.length}</Text>
        </View>

        <List>
          {result}
        </List>
      </Content>
    </Container>
  )
};
