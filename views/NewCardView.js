import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, TextInput } from 'react-native'; 
import { styles } from '../styles/styles';
import { NEW_DECK_QN_STR, NEW_DECK_ANS_STR } from '../constants/constants'; 
import * as API from '../utils/api'; 
import Question from '../models/Question'; 
import Modal from '../components/Modal'; 
class NewCardView extends Component {

    state = {
        questionInput : '',
        answerInput: '', 
        currentDeck: null, 
        showModal: false
    }

    componentDidMount(){
        let item = this.props.navigation.getParam('item'); 
        if (item) {
            let deck = JSON.parse(item); 
            this.setState({currentDeck : deck}); 
        }
    }

    onAddNewCard = () => {
        this.setState({showModal: false}); 
    }

    onClose = () => {
        this.setState({showModal: false}); 
        let id = this.state.currentDeck ? this.state.currentDeck.deckId : ''; 
        let title = this.state.currentDeck ? this.state.currentDeck.title : ''; 
        this.props.navigation.navigate('DeckView', {itemId: id, title: title});  
    }

    modalLeftBtn = {
        text: 'New Card', 
        action: this.onAddNewCard
    }

    modalRightBtn = {
        text: 'Done', 
        action: this.onClose
    }

    onAddCard = () => {
        if (this.state.currentDeck && this.state.questionInput && this.state.answerInput) {
            let qnId = this.state.currentDeck && this.state.currentDeck.question ? this.state.currentDeck.question.length: 1; 
            let newQn = new Question(qnId, this.state.questionInput, this.state.answerInput); 
            let updatedDeck = this.state.currentDeck; 
            if (!updatedDeck.questions) {
                updatedDeck.questions = [];
            }
            updatedDeck.questions.push(newQn); 
            updatedDeck.numCards = updatedDeck.questions.length; 
            API.addCard(updatedDeck).then(result => {
                this.setState({showModal: true, questionInput:'', answerInput: ''});  
            });
        }
    }

    render(){
        let isDisabled = !this.state.questionInput || !this.state.answerInput; 
        return !this.state.showModal ? (
                <View style={styles.container}>
                    <TextInput 
                        placeholder={NEW_DECK_QN_STR}
                        style={styles.input} 
                        onChangeText={(questionInput) => this.setState({questionInput})}
                    />
                    <TextInput 
                        placeholder={NEW_DECK_ANS_STR}
                        style={styles.input} 
                        onChangeText={(answerInput) => this.setState({answerInput})}
                    />
                    <TouchableOpacity style={styles.button} onPress={this.onAddCard} disabled={isDisabled}>
                        <Text style={styles.buttonText} >Submit</Text>
                    </TouchableOpacity>
                </View>
                ):
                (
                    <Modal leftBtn={this.modalLeftBtn} rightBtn={this.modalRightBtn} message={`New card added successfully!`} visible={this.state.showModal}/>
                );
    }
}

export default NewCardView;