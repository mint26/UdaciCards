import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, TextInput } from 'react-native'; 
import { styles } from '../styles/styles';
import { NEW_DECK_QN_STR, NEW_DECK_ANS_STR } from '../constants/constants'; 
import * as API from '../utils/api'; 
import Question from '../models/Question'; 

class QuizView extends Component {

    state = {
        currentDeck: null, 
        currentIndex: 0,
        currentQuestion: null, 
        showQuestion: true, 
        endOfDeck: false, 
        numCorrect: 0,
    }

    componentDidMount(){
        let item = this.props.navigation.getParam('item'); 
        if (item) {
            let currentQuestion = item.questions && item.questions.length > 0 ? item.questions[0] : null;
            this.setState({currentDeck : item, currentQuestion: currentQuestion}); 
        }
    }

    onViewAnswer = () => {
        this.setState({showQuestion: false}); 
    }

    onNextCard = (increment) => {
        let nextIndex = this.state.currentIndex++; 
        if (this.state.currentIndex < this.state.currentDeck.questions.length - 1) {
            let nextQn = this.state.currentDeck.questions[nextIndex];
            let numCorrect = this.state.numCorrect + increment; 
            this.setState({showQuestion: true, currentQuestion: nextQn, numCorrect: numCorrect});
        } else {
            this.setState({endOfDeck : true}); 
        }
    }

    render(){
        return (
                <View style={styles.card}>
                    <Text>{this.state.showQuestion ? this.state.currentQuestion.question : this.state.currentQuestion.answers}</Text>
                    {this.state.showQuestion && (
                        <TouchableOpacity style={styles.button}>
                         <Text style={styles.buttonText} onPress={this.onViewAnswer}>View</Text>
                        </TouchableOpacity>
                    )}
                    {!this.state.showQuestion && (
                        <View>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText} onPress={() => this.onNextCard(1)}>Correct</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText} onPress={() => this.onNextCard(0)}>Incorrect</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
                );
    }
}

export default QuizView;