import { useState } from 'react';

import { Button, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({ setGoals = () => {} }) => {
  const [goal, setGoal] = useState('');

  const goalInputHandler = (text) => {
    setGoal(text);
  };
  const addGoalHandler = () => {
    setGoals((currentGoals) => [...currentGoals, goal]);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalInputHandler}
        placeholder='Your course goal'
        style={styles.textInput}
      />
      <Button title='Add Goal' onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default GoalInput;
