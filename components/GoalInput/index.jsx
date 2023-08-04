import { useState } from 'react';

import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from 'react-native';

const GoalInput = ({
  visible = false,
  setGoals = () => {},
  setVisible = () => {},
}) => {
  const [goal, setGoal] = useState('');

  const goalInputHandler = (text) => {
    setGoal(text);
  };
  const addGoalHandler = () => {
    goal && setGoals((currentGoals) => [...currentGoals, goal]);
    setGoal('');
    setVisible(false);
  };
  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image source={require('../../assets/goal.png')} style={styles.image} />
        <TextInput
          onChangeText={goalInputHandler}
          placeholder='Your course goal'
          style={styles.textInput}
          value={goal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              title='Cancel'
              color='#f31282'
              onPress={setVisible.bind(this, false)}
            />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' color='#a065ec' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    padding: 16,
    width: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
});

export default GoalInput;
