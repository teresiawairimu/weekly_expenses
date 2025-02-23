import {View, StyleSheet, Text, TextInput, Button} from "react-native";
import React, {useState} from "react";

const AddExpenses = (props) => {
  let expenseItem = '';
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        onChangeText={(newValue) => { expenseItem = newValue; }}
        placeholder="Enter Expense Entry"
      />
      <View style={styles.buttonStyle}>
        <View style={{marginRight: 50, borderRadius: 10}}>
          <Button
            title="Add"
            onPress={ () => {props.insertExpense(expenseItem)}}
          />
        </View>
          <View style={{borderRadius: 10}}>
            <Button
              title="Cancel"
            />
          </View>
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
    padding: 10,
    borderRadius: 5
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