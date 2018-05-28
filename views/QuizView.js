import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, TextInput } from 'react-native'; 
import { styles } from '../styles/styles';
import { NEW_DECK_QN_STR, NEW_DECK_ANS_STR } from '../constants/constants'; 
import * as API from '../utils/api'; 
import Question from '../models/Question'; 

class QuizView extends Component {

    state = {
        questionInput : '',
        answerInput: '', 
        currentDeck: null
    }

    componentDidMount(){
        let item = this.props.navigation.getParam('item'); 
        if (item) {
            this.setState({currentDeck : item}); 
        }
    }

    onAddCard = () => {
        if (this.state.currentDeck) {
            let qnId = currentDeck && currentDeck.question ? currentDeck.question.length: 1; 
            let newQn = new Question(qnId, this.state.questionInput, this.state.answerInput); 
            API.addCard(newQn, this.currentDeck.deckId).then(result => {
                this.props.navigation.push('IndividualDeckView');
            });
        }
    }

    render(){
        return (
                <View style={styles.card}>
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
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={this.onAddCard}>Submit</Text>
                    </TouchableOpacity>
                </View>
                );
    }
}

export default QuizView;