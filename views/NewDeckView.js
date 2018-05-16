import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, TextInput } from 'react-native'; 
import { NEW_DECK_TITLE_STR, NEW_DECK_TITLE_PLACEHOLDER_STR } from '../constants/constants'; 
import { limeGreen, blue, white, black, purple } from '../utils/colors'; 
import * as API from '../utils/api'; 
import Deck from '../models/Deck'; 


class NewDeckView extends Component {

    state = {
        questionInput: ''
    }
    onAddDeck = () => {
        console.log('deck', this.state.questionInput); 
        if (this.state.questionInput) {
            let newDeck = new Deck(this.state.questionInput, this.state.questionInput); 
            API.addDeck(newDeck).then(result => {
                console.log('returned result', result); 
            })
        }
    }
    render () {
        return (
            <View style={styles.newDeckContainer}>
                <Text style={styles.question}>{NEW_DECK_TITLE_STR}</Text>
                <TextInput 
                    style={styles.questionInput} 
                    placeholder={NEW_DECK_TITLE_PLACEHOLDER_STR}
                    onChangeText={(questionInput) => this.setState({questionInput})}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={this.onAddDeck}>Add Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  newDeckContainer: {
    backgroundColor: limeGreen,
    margin:20, 
    borderRadius:8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  question: {
    fontSize: 25,
    fontWeight: 'bold', 
    margin:20
  },
  questionInput: {
      borderRadius:8, 
      width:'80%',
      margin:20, 
      padding:20,
      backgroundColor: white,
      color: black
  },
  button: { 
    margin: 20, 
    padding: 20, 
    backgroundColor: purple,
    borderRadius: 8
  }, 
  buttonText: {
    color:white,
    fontWeight:'bold',
    fontSize:20
  }
});

export default NewDeckView; 