import {FlatList, View, Text, StyleSheet} from "react-native";

const DisplayExpenses = (props) => {
  return (
    <View>
      <FlatList 
        data={props.weeklyExpenseList}
        keyExtractor={(expenseItem, index) =>  index}
        renderItem={(element) => {
          console.log(element);
          return (
            <Text style ={styles.textStyle}>{element.item}</Text>
          );
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