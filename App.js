import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View , Button } from 'react-native';

export default function App() {
  const [a,seta] = useState({
    name:""
  });
  var [ite,setitem] = useState([]);

  var s = ["bjvhgc","knjbhvg"];

  const submit = () =>{
    setitem([...ite,a.name])
    seta({
      name:""
    })
  }

  const list= ()=>{
    return ite.map((value) => {
      return (
        <Text key={value}>{value}</Text>
      )
    })
  }
  return (
    <View style={styles.container}>
     
        <TextInput
        style={{borderWidth : 2, borderColor: 'skyblue', margin:20,width:400}}
        onChangeText={(text) => seta({name: text})}
        value={a.name}
        >

        </TextInput>
        <Button type="submit" title="Submit" onPress={()=> submit()} ></Button>

        <h1>Todo List</h1>
          {list()}
      
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


