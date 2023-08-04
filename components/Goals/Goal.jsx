import { StyleSheet, Text, View, Pressable } from 'react-native';

const Goal = ({ itemData, setGoals }) => {
  const handleDeleteGoal = (index) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal, i) => i !== index);
    });
  };

  return (
    <Pressable
      onPress={handleDeleteGoal.bind(this, itemData.index)}
      android_ripple={{ color: '#aaa' }}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.goalItemContainer}>
        <Text style={styles.goalItem}>{itemData.item}</Text>
      </View>
    </Pressable>
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
  pressed: {
    opacity: 0.5,
  },
});

export default Goal;
