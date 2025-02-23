import {FlatList, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

const DisplayExpenses = (props) => {
  return (
    <View>
      <FlatList 
        data={props.weeklyExpenseList}
        keyExtractor={(expenseItem, index) =>  index}
        renderItem={(element) => {
          console.log(element);
          return (
            <View style={styles.container}>
              <Text style ={styles.textStyle}>{element.item}</Text>
              <View style={{marginTop: 20}}>
                <TouchableOpacity
                  onPress={ () => {props.removeExpense(element.item)}}
                >
                  <AntDesign name="delete" size={40} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'

  },
  textStyle: {
    margin: 20,
    height: 50,
    width: 200,
    borderWidth: 2,
    borderColor: 'purple',
    padding: 10,
    borderRadius: 2
  }

})
export default DisplayExpenses;