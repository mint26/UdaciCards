import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, TextInput } from 'react-native'; 
import { styles } from '../styles/styles';
import { NEW_DECK_QN_STR, NEW_DECK_ANS_STR } from '../constants/constants'; 
import * as API from '../utils/api'; 
import Question from '../models/Question'; 
import Modal from '../components/Modal'; 
class IndividualDeckView extends Component {

    state = {
        questionInput : '',
        answerInput: '', 
        currentDeck: null, 
        showModal: false
    }

    componentDidMount(){
        let item = this.props.navigation.getParam('item'); 
        if (item) {
            this.setState({currentDeck : item}); 
        }
    }

    onAddNewCard = () => {
        this.setState({showModal: false}); 
    }

    onClose = () => {
        this.setState({showModal: false}); 
        this.props.navigation.navigate('DeckView', {itemId: this.currentDeck ? this.currentDeck.deckId : '', title: this.currentDeck ? this.currentDeck.title : ''});  
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
        if (this.state.currentDeck) {
            let qnId = this.state.currentDeck && this.state.currentDeck.question ? this.state.currentDeck.question.length: 1; 
            let newQn = new Question(qnId, this.state.questionInput, this.state.answerInput); 
            
            API.addCard(newQn, this.state.currentDeck.deckId).then(result => {
                this.setState({showModal: true, questionInput:'', answerInput: ''});  
            });
        }
    }

    render(){
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
                    <TouchableOpacity style={styles.button} onPress={this.onAddCard}>
                        <Text style={styles.buttonText} >Submit</Text>
                    </TouchableOpacity>
                </View>
                ):
                (
                    <Modal leftBtn={this.modalLeftBtn} rightBtn={this.modalRightBtn} message={`Successfully added card to ${this.state.currentDeck ? this.state.currentDeck.title : ''} deck!`}visible={this.state.showModal}/>
                );
    }
}

export default IndividualDeckView;