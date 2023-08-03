import { useState } from 'react';

import { StyleSheet, View } from 'react-native';

import GoalInput from './components/GoalInput';
import Goals from './components/Goals';

export default function App() {
  const [goals, setGoals] = useState([]);

  return (
    <View style={styles.appContainer}>
      <GoalInput setGoals={setGoals} />
      <Goals goals={goals} setGoals={setGoals} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
});
