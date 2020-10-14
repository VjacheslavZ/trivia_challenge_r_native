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
  Button,
  Content
} from 'native-base';
import { SafeAreaView, FlatList, StyleSheet, StatusBar, Dimensions, Animated } from 'react-native';

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
  const CARD_HEIGHT = (Dimensions.get('window').height) - 100
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

  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)
  const { height: wHeight } = Dimensions.get("window");
  const height = wHeight - 64;

  const Card = ({ data, y }) => {
    let { index } = data;
    console.log("y", y)

    const position = Animated.subtract(index * CARD_HEIGHT, y);
    const isDisappearing = -CARD_HEIGHT;
    const isTop = 0;
    const isBottom = height - CARD_HEIGHT
    const isAppearing = height;

    const scale = position.interpolate({
      inputRange: [isDisappearing, isTop, isBottom, isAppearing],
      outputRange: [0.5, 1, 1, 0.5],
      extrapolate: "clamp",
    });

    const opacity = position.interpolate({
      inputRange: [isDisappearing, isTop, isBottom, isAppearing],
      outputRange: [0.5, 1, 1, 0.5],
    });

    const translateY = Animated.add(
      Animated.add(
        y,
        y.interpolate({
          inputRange: [0, 0.00001 + index * CARD_HEIGHT],
          outputRange: [0, -index * CARD_HEIGHT],
          extrapolateRight: "clamp",
        })
      ),
      position.interpolate({
        inputRange: [isBottom, isAppearing],
        outputRange: [0, -CARD_HEIGHT / 4],
        extrapolate: "clamp",
      })
    );

    return(
      <Animated.View style={[styles.container, { opacity, transform: [{translateY}, { scale }] }]}>
        <View style={styles.question}>
          <Text>
            {data.item.question}
          </Text>
        </View>

        <View style={styles.progressContainer}>
          <Text>{data.index + 1} of {questions.length}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={() => handleAnswer(true)}>
            <Text>True</Text>
          </Button>
          <Button onPress={() => handleAnswer(false)}>
            <Text>False</Text>
          </Button>
        </View>
      </Animated.View>
    )
  }

  const y = new Animated.Value(0);
  const onScroll = Animated.event([
    {
      nativeEvent: {
        contentOffset: {
          y
        }
      }
    },
  ], {
    useNativeDriver: true
  })

  return (
    <View style={{ flex: 1}}>
      <Header style={styles.header}>
        <Title>
          {currentQuestion.category}
        </Title>
      </Header>
        <AnimatedFlatList
          scrollEventThrottle={16}
          bounces={false}
          data={questions}
          renderItem={(data) => <Card y={y} data={data}/>}
          keyExtractor={item => item.question}
          {...{onScroll}}
        />
    </View>
  );
}
