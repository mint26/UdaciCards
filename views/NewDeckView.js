import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, TextInput } from 'react-native'; 
import { NEW_DECK_TITLE_STR, NEW_DECK_TITLE_PLACEHOLDER_STR } from '../constants/constants'; 
import { styles } from '../styles/styles';
import { limeGreen } from '../utils/colors'; 
import * as API from '../utils/api'; 
import Deck from '../models/Deck'; 


class NewDeckView extends Component {

    state = {
        questionInput: ''
    }

    onAddDeck = () => {
        console.log('on add deck entry', this.state.questionInput); 
        if (this.state.questionInput) {
            let newDeck = new Deck(this.state.questionInput, this.state.questionInput); 
            API.addDeck(newDeck).then(result => {
                console.log('on add deck', result); 
                this.setState({questionInput:''}); 
                this.props.navigation.navigate('DeckListView'); 
                
            })

            
        }
    }
    render () {
        return (
            <View style={styles.card}>
                <Text style={styles.text}>{NEW_DECK_TITLE_STR}</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder={NEW_DECK_TITLE_PLACEHOLDER_STR}
                    onChangeText={(questionInput) => this.setState({questionInput})}
                />
                <TouchableOpacity style={styles.button} onPress={this.onAddDeck}>
                    <Text style={styles.buttonText}>Add Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


export default NewDeckView; 