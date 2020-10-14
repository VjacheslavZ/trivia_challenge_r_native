import React, { useEffect, useState } from 'react';
import queryString from "query-string"
import {Html5Entities} from 'html-entities';
import { Spinner, Title,Container, Text, View, Header } from 'native-base';

import { styles } from "./styles";

export const QuizScreenComponent = ({
  diifficulty,
  category,
  fetchQuestions,
  questions,
  isFetching,
  categories
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    const query = queryString.stringify({
      diifficulty,
      category
    })

    fetchQuestions(query)
  }, []);
  if (isFetching) return <Spinner/>

  const title = categories.find(({ id }) => id === category) || {name: "Any category"}

  const currentQuestion = questions[questionIndex];
  const entities = new Html5Entities();
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
    </Container>
  );
}
