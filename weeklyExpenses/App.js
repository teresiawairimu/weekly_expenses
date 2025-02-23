import React, {useState, useReducer} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddExpenses from './components/AddExpenses';
import DisplayExpenses from './components/DisplayExpenses';

const reducer = (state, action) => {
  switch(action.type) {
    case 'addExpense':
      return [...state, action.payload];
    default:
      return state;
  }

}

export default function App() {
  //const [expenseList, setExpenses] = useState([]);
  const [expenseList, dispatch] = useReducer(reducer, []);
  return (
    <View style={styles.container}>   
      <View style={styles.addExpenseStyle}>
        <AddExpenses insertExpense = {(newExpense) => {dispatch({type: 'addExpense', payload: newExpense})}}/>
      </View>
      <View style={styles.displayExpenseStyle}>
        <DisplayExpenses weeklyExpenseList = {expenseList}/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 5,
    //borderColor: 'red'
  },
  addExpenseStyle: {
    flex: 1,
    marginTop: 70,
    borderBottomWidth: 2,
    borderBottomColor: 'black'
    //borderWidth: 5,
    //borderColor: 'purple'

  },
  displayExpenseStyle: {
    flex: 3,
    alignSelf: 'stretch'
    //borderWidth: 5,
    //borderColor: 'green'

  }
});
