import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Audio } from 'expo-av';

export default class Shanks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      law:"",
    }
  }
  brook = async (soundChunk) => {
    var banda_brook = 'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk + '.mp3';
    await Audio.Sound.createAsync(
      {
        uri: banda_brook,
      },
      {shouldPlay: true}
    );
  };
  
 render(){
    return(
      <TouchableOpacity
      style={
        this.props.index_button === this.state.law ?
        [styles.kaido,{backgroundColor: "white"}] :
        [styles.kaido,{backgroundColor: "red"}]
      }
      onPress={()=>{
        this.setState({law: this.props.index_button})
        this.brook(this.props.soundChunk);
      }}>
      <Text style={
        this.props.index_button === this.state.law ?
        [styles.going_merry,{color: "red"}] :
        [styles.going_merry,{color: "white"}]
      }>{this.props.wordChunk}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  going_merry: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
  },
  kaido: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red',
  },
})
