import { useState } from 'react';

import { Button, StyleSheet, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import GoalInput from './components/GoalInput';
import Goals from './components/Goals';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <StatusBar style='inverted' />
      <View style={styles.appContainer}>
        <Button
          title='Add Goal'
          color='#5e0acc'
          onPress={setOpenModal.bind(this, true)}
        />
        <GoalInput
          visible={openModal}
          setVisible={setOpenModal}
          setGoals={setGoals}
        />
        <Goals goals={goals} setGoals={setGoals} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
});
