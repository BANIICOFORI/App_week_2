import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import LoginScreen from './LoginScreen';
import Register from "./conponents/Register";
import ContactsScreen from './ContactsScreen';
import Contact from "./conponents/Contact";
import PetList from "./conponents/PetList";
import Pet from "./conponents/Pet";
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      names: ["Nana", "Eric", "Joyce", "Heney", "Nana", "Eric", "Joyce", "Heney", "Nana", "Eric", "Joyce", "Heney", "Nana", "Eric", "Joyce", "Heney", "Nana", "Eric", "Joyce", "Heney", "Nana", "Eric", "Joyce", "Heney", "Nana", "Eric", "Joyce", "Heney", "Nana", "Eric", "Joyce", "Heney", "Nana", "Eric", "Joyce", "Heney", "Nana", "Eric", "Joyce", "Heney", "Nana", "Eric", "Joyce", "Heney", "Nana", "Eric", "Joyce", "Heney"]
    }
  }
  render() {

    return (
      <View style={styles.container}>
        {/* <Register /> */}
        {/* <Contact /> */}
        {/* <ContactsScreen /> */}
       {/* <LoginScreen /> */}
       {/* <PetList  /> */}
       <Pet />
        
        {/* <FlatList 
        data={this.state.names}
        renderItem={({item})=>{
          return<Text>{item}</Text>
        }}
        keyExtractor={(item,index)=>index}
        /> */}

        
        
        
        {/* <ScrollView>
          {this.state.names.map((Name) => {
            return <Text>{Name}</Text>
          })}
        </ScrollView> */}

        {/* <TextInput style={styles.input}
       placeholder="Enter Email"
        autoCapitalize="none"
        autoCorrect={true}
        secureTextEntry={false}
        value={this.state.email}
        onChangeText={(email)=>{
          // console.log(text);
          this.setState({email:email})
        }}
      />
       <TextInput style={styles.input}
       placeholder="Password"
        autoCapitalize="none"
        //autoCorrect={true}
        secureTextEntry={true}
        value={this.state.password}
        onChangeText={(password)=>{
          // console.log(text);
          this.setState({password:password})
        }}
      />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.button}>Login</Text>
      </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  input: {
    backgroundColor: "white",
    borderBottomWidth: 0.5,
    height: 60,
    marginHorizontal: 15,
    marginVertical: 5
  },
  button: {
    // height:20,
    // marginHorizontal:20,
    // marginVertical:50,
    // justifyContent:"center",
    // alignItems:"center"
    color: "white",
    fontSize: 20
  },
  buttonContainer: {
    marginHorizontal: 20,
    backgroundColor: "skyblue",
    height: 35,
    borderWidth: 1,
    // marginVertical:20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15
  }
});

export default App
