import React, { useEffect, useState } from 'react';
import queryString from "query-string"
import { Html5Entities } from 'html-entities';
import {
  Spinner,
  Title,
  Container,
  Text,
  View,
  Header,
  Button
} from 'native-base';

import { styles } from "./styles";

export const QuizScreenComponent = ({
  diifficulty,
  category,
  fetchQuestions,
  questions,
  isFetching,
  setAnswer,
  navigation,
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    const query = queryString.stringify({
      diifficulty,
      category
    })

    fetchQuestions(query)
  }, []);

  useEffect(() => {
    if (questionIndex === questions.length - 1) {
      navigation.navigate("Home") // TODO
    }
  }, [questionIndex])

  if (isFetching) return <Spinner />;

  const currentQuestion = questions[questionIndex];
  const entities = new Html5Entities();

  const handleAnswer = answer => {
    const answerData = {
      ...currentQuestion,
      userAnswer: answer,
    };

    setAnswer(answerData)
    setQuestionIndex(questionIndex + 1);
  }

  return (
    <Container style={styles.container}>
        <Header style={styles.header}>
          <Title>
            {currentQuestion.category}
          </Title>
        </Header>

        <View style={styles.question}>
          <Text>
            {entities.decode(currentQuestion.question)}
          </Text>
        </View>

        <View style={styles.progressContainer}>
          <Text>{questionIndex + 1} of {questions.length}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={() => handleAnswer(true)}>
            <Text>True</Text>
          </Button>
          <Button onPress={() => handleAnswer(false)}>
            <Text>False</Text>
          </Button>
        </View>
    </Container>
  );
}
