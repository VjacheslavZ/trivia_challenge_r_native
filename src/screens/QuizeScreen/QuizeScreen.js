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


  let question;
  const currentQuestion = questions[questionIndex] || {};
  const entities = new Html5Entities();
  if (Object.keys(currentQuestion).length) {
    question = entities.decode(currentQuestion.question);
  }

  const handleAnswer = answer => {
    const answerData = {
      ...currentQuestion,
      question,
      userAnswer: answer,
    };

    setAnswer(answerData)
    if ((questionIndex === questions.length - 1) && questions.length) {
      navigation.navigate("Score");
      return
    }

    setQuestionIndex(questionIndex + 1);
  }

  if (isFetching) return <Spinner />;

  return (
    <Container style={styles.container}>
        <Header style={styles.header}>
          <Title>
            {currentQuestion.category}
          </Title>
        </Header>

        <View style={styles.question}>
          <Text>
            {question}
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
