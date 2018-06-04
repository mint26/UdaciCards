import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, TextInput } from 'react-native'; 
import { NEW_DECK_TITLE_STR, NEW_DECK_TITLE_PLACEHOLDER_STR } from '../constants/constants'; 
import { styles, variables } from '../styles/styles';
import { limeGreen } from '../utils/colors'; 
import * as API from '../utils/api'; 
import Deck from '../models/Deck'; 


class NewDeckView extends Component {

    state = {
        questionInput: ''
    }

    onAddDeck = () => {
        if (this.state.questionInput) {
            let newDeck = new Deck(this.state.questionInput, this.state.questionInput); 
            API.addDeck(newDeck).then(result => {
                this.setState({questionInput:''}); 
                this.props.navigation.navigate('DeckListView'); 
                
            })

            
        }
    }
    render () {
        return (
            <View style={styles.container}>
                <Text style={viewStyles.questionText}>{NEW_DECK_TITLE_STR}</Text>
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

const viewStyles = StyleSheet.create({
    questionText: {
        fontSize: variables.largeFontSize,
        fontWeight: 'bold', 
        margin: variables.normalGap,
        flex: 0.3, 
        textAlign: 'center'
    }
});

export default NewDeckView; 