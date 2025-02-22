import {FlatList, View, Text, StyleSheet} from "react-native";

const DisplayExpenses = (props) => {
  return (
    <View>
      <Text>
        Hello display expenses
      </Text>
      <FlatList 
        data={props.weeklyExpenseList}
        keyExtractor={(expenseItem, index) => { index}}
        renderItem={(element) => {
          <Text style ={styles.textStyle}>{element.item}</Text>
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    margin: 20
  }

})
export default DisplayExpenses;