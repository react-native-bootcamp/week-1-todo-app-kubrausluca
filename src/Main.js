import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';

import AddToDo from './components/AddToDo';
import Header from './components/header';
import {ToDoItem} from './components/ToDoItem';

const Main = () => {
  const [list, setlist] = useState([]);

  const submitHandler = text => {
    let newToDo = [...list];
    newToDo.push({myEntry: text});
    setlist(newToDo);
  };

  const pressHandler = item => {
    let newList = [...list];
    item.isDone = item.isDone === 0 ? 1 : 0;
    console.log(item);
    setlist(newList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddToDo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={list}
            renderItem={({item}) => (
              <ToDoItem Item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

export default Main;
