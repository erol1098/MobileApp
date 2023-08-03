import { FlatList, StyleSheet, Text, View } from 'react-native';
import Goal from './Goal';

const Goals = ({ goals = [], setGoals = () => {} }) => {
  const handleDeleteGoal = (index) => {
    const newGoals = goals.filter((_, i) => i !== index);
    setGoals(newGoals);
  };
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goals}
        alwaysBounceVertical={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(itemData) => (
          <Goal itemData={itemData} handleDeleteGoal={handleDeleteGoal} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
  },
  goalItemContainer: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalItem: {
    color: '#fff',
  },
});

export default Goals;
