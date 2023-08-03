import { StyleSheet, Text, View } from 'react-native';

const Goal = ({ itemData, handleDeleteGoal }) => {
  return (
    <View style={styles.goalItemContainer}>
      <Text
        style={styles.goalItem}
        onPress={() => handleDeleteGoal(itemData.index)}
      >
        {itemData.item}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Goal;
