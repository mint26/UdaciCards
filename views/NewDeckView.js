import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, TextInput } from 'react-native'; 
import { NEW_DECK_TITLE_STR, NEW_DECK_TITLE_PLACEHOLDER_STR } from '../constants/constants'; 
import { styles, variables } from '../styles/styles';
import { limeGreen, lightGray } from '../utils/colors'; 
import * as API from '../utils/api'; 
import Deck from '../models/Deck'; 
import Modal from '../components/Modal'; 

class NewDeckView extends Component {

    state = {
        questionInput: '', 
        redirectBack: false, 
        addedSuccessfully: false,
        showModal: false,
        createdDeckName: ''
    }

    onAddNewDeck = () => {
        this.setState({showModal: false}); 
    }

    onClose = () => {
        this.setState({showModal: false}); 
        this.props.navigation.navigate('DeckListView'); 
    }


    modalLeftBtn = {
        text: 'New Deck', 
        action: this.onAddNewDeck
    }

    modalRightBtn = {
        text: 'Done', 
        action: this.onClose
    }

    onAddDeck = () => {
        if (this.state.questionInput) {
            let newDeck = new Deck(this.state.questionInput, this.state.questionInput); 
            API.addDeck(newDeck).then(result => {
                this.setState({questionInput:'', createdDeckName: newDeck.title, showModal: true}); 
                // this.props.navigation.navigate('DeckListView'); 
                
            })
        }
    }

    render () {
        return !this.state.showModal ? (
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
        ):(
            <Modal leftBtn={this.modalLeftBtn} rightBtn={this.modalRightBtn} message={`Successfully created ${this.state.createdDeckName}!`}visible={this.state.showModal}/>
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