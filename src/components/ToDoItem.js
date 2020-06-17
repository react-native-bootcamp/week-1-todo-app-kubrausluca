import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const ToDoItem = props => {
  return (
    <TouchableOpacity onPress={() => props.pressHandler(props.Item)}>
      <View
        style={[
          styles.container,
          {backgroundColor: props.Item.isDone ? '#ff8a65' : '#dcedc8'},
        ]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.dot} />
          <Text style={styles.text}>{props.Item.myEntry}</Text>
        </View>
        {props.Item.isDone ? (
          <Text style={{marginRight: 10}}>Yapıldı!</Text>
        ) : (
          <Text style={{marginRight: 10}}>Yapılmadı!</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dcedc8',
    margin: 5,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    marginLeft: 20,
    alignItems: 'center',
  },
  dot: {
    backgroundColor: '#490A3D',
    width: 15,
    height: 15,
    borderRadius: 10,
    marginLeft: 5,
  },
});

export {ToDoItem};
