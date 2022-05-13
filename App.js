import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from "./localdb.js";
import Shanks from "./Shanks.js";

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      gear4:"",
      zoro:[],
      ace: []
    }
  }
  render() {
    return (
      <SafeAreaProvider>
      <View style={styles.container}>
      <Header 
      backgroundColor = {'#9c8210'}
      centerComponent = {{
        text: "Monkey D. Luffy",
        style: {color: "white", fontSize: 20}
      }}
      />
      <Image
      style={styles.monkey_d_dragon}
      source={{uri: 'https://orig08.deviantart.net/c13e/f/2014/002/2/b/luffy_chibi_render_by_yeye_chan-d70i84q.png'}}
      />
      <TextInput
      style ={styles.akuma_no_mi}
      onChangeText = {text => {
        this.setState({
          gear4: text,
        });
      }}
      value = {this.state.gear4}
      />
      <TouchableOpacity
      style = {styles.haki}
      onPress = {() => {
        var buggy = this.state.gear4.toLowerCase().trim();
        db[buggy] ? (
        this.setState({zoro:db[buggy].chunks}),
        this.setState({ace:db[buggy].phones})
        )
        : alert("Não existe, tente novamente");
      }}>
      <Text style = {styles.going_merry}> partiu aventura </Text>
      </TouchableOpacity>
      <View>
      {this.state.zoro.map((item, index) => {
        return(
          <Shanks
            wordChunk={this.state.zoro[index]}
            soundChunk={this.state.ace[index]}
            index_button = {index}
          />
        )
      })}
      </View>
      </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#003399',
  },
  akuma_no_mi:{
    marginTop:200,
    width:"80%",
    alignSelf:"center",
    height:40,
    textAlign:"center",
    borderWidth:4,
    outline: "none",
    backgroundColor:"white"
  },
  haki:{
    width:"50%",
    height:100,
    backgroundColor:"purple",
    alignSelf:"center",
    padding: 10,
    margin: 10,
    borderRadius:10
     },
  going_merry:{
    textAlign:"center",
    fontSize:30,
    fontWeight:"bold",
  },
  monkey_d_dragon:{
    width: 180,
    height: 250,
    alignSelf: "center",
    justifyContent:"center"
  },
  kaido:{
    width:"60%",
    height:50,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    borderRadius:10,
    margin:5,
    backgroundColor:"red"
  }
});
