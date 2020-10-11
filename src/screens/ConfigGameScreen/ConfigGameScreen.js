import React, { useEffect, useState } from 'react';
import { Spinner, Container, Content, Form, Item, Picker, Icon, Button, Text } from 'native-base';

import { styles } from "./styles";

export const ConfigGameScreenComponent = ({
  navigation,
  getConfigGame,
  isFetching,
  categories,
  setDifficulty: setDifficultyAction,
  setCategory: setCategoryAction,
}) => {
  useEffect(() => {
    getConfigGame()
  }, []);

  const [category, setCategory] = useState('all');
  const [difficult, setDifficult] = useState('any');

  if (isFetching) return <Spinner color='blue'/>
  const categoryItems = categories.map(({id, name}) => <Picker.Item label={name} value={id} key={id}/>)

  const handlePressStart = () => {
    navigation.navigate("Quiz")
  }

  const handlePressDifficult = (value) => {
    setDifficult(value)
    setDifficultyAction(value)
  }

  const handlePressCategory = (value) => {
    setCategory(value)
    setCategoryAction(value)
  }

  return (
    <Container style={styles.container}>
      <Content>
        <Form>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Select category"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={category}
              onValueChange={handlePressCategory}
            >
              {categoryItems}
            </Picker>
          </Item>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Select category"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={difficult}
              onValueChange={handlePressDifficult}
            >
              <Picker.Item label="Any difficulty" value="any" />
              <Picker.Item label="Easy" value="easy" />
              <Picker.Item label="Medium" value="medium" />
              <Picker.Item label="Hard" value="hard" />
            </Picker>
          </Item>
        </Form>

        <Button
          block
          onPress={handlePressStart}
          style={styles.startGame}
        >
          <Text>Start game</Text>
        </Button>
      </Content>
    </Container>
  )
}
