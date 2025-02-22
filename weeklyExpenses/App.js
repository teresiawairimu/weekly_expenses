import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddExpenses from './components/AddExpenses';
import DisplayExpenses from './components/DisplayExpenses';


export default function App() {
  const [expenseList, setExpenses] = useState([]);
  return (
    <View style={styles.container}>   
      <View style={styles.addExpenseStyle}>
        <AddExpenses insertExpense = {(newExpense) => {setExpenses([...expenseList, newExpense])}}/>
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
    //borderWidth: 5,
    //borderColor: 'green'

  }
});
