import {View, StyleSheet, Text, TextInput, Button} from "react-native";
import React, {useState} from "react";

const AddExpenses = (props) => {
  const [expense, setExpenses] = useState([]);
  let expenseItem = '';
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        onchangeText={(newValue) => { expenseItem = newValue; }}
        value={expense}
        placeholder="Enter Expense Entry"
      />
      <View style={styles.buttonStyle}>
        <View style={{marginRight: 50}}>
          <Button
            title="Add!"
            onPress={ () => {props.insertExpense(expenseItem)}}
          />
        </View>
        <Button
          title="Cancel"
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    //borderWidth: 5,
    //borderColor: 'blue'


  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  buttonStyle: {
    flexDirection: 'row',
    margin: 12
  },
  buttonInner: {
    marginRight: 50
  }
  

})

export default AddExpenses;