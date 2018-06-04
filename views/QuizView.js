import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, TextInput } from 'react-native'; 
import { styles, variables } from '../styles/styles';
import { NEW_DECK_QN_STR, NEW_DECK_ANS_STR } from '../constants/constants'; 
import * as API from '../utils/api'; 
import Question from '../models/Question'; 
import { white, red, black, green} from '../utils/colors'; 

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
        let numCorrect = this.state.numCorrect + increment; 
        if (this.state.currentIndex < this.state.currentDeck.questions.length - 1) {
            let nextIndex = this.state.currentIndex++; 
            let nextQn = this.state.currentDeck.questions[nextIndex];
            this.setState({showQuestion: true, currentQuestion: nextQn, numCorrect: numCorrect});
        } else {
            this.setState({endOfDeck : true, numCorrect: numCorrect}); 
        }
    }

    endOfDeck = () => {
        this.props.navigation.goBack(); 
    }

    render(){

        let numQns = this.state.currentDeck && this.state.currentDeck.questions ? this.state.currentDeck.questions.length : 0;
        if (this.state.endOfDeck) {
            let score = `You have ${this.state.numCorrect} out of ${numQns} correct questions`
            return (
                <View style={StyleSheet.flatten([styles.container, viewStyles.container])}>
                    <View style={viewStyles.header}>
                        <Text style={viewStyles.headerText}>{displayIndex}</Text>
                    </View>
                    <View style={viewStyles.textPanel}>
                        <Text style={viewStyles.qnText}>{score}</Text>
                    </View>
                    <View style={viewStyles.buttonPanel}>
                        <TouchableOpacity style={StyleSheet.flatten([styles.button, viewStyles.button])}>
                            <Text style={styles.buttonText} onPress={this.endOfDeck}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        let displayText = this.state.showQuestion && this.state.currentQuestion ? this.state.currentQuestion.question : 
                        this.state.currentQuestion ? this.state.currentQuestion.answer : ''; 
        
        let displayType = this.state.showQuestion ? 'Question' : 'Answer'; 

        let displayIndex = `${this.state.currentIndex + 1} / ${numQns}`;
        return (
                <View style={StyleSheet.flatten([styles.container, viewStyles.container])}>
                    <View style={viewStyles.header}>
                        <Text style={viewStyles.headerText}>{displayIndex}</Text>
                    </View>
                    <View style={viewStyles.textPanel}>
                        <Text style={viewStyles.qnText}>{displayText}</Text>
                        <Text style={viewStyles.textType}>{displayType}</Text>
                    </View>
                    {this.state.showQuestion && (
                        <View style={viewStyles.buttonPanel}>
                            <TouchableOpacity style={StyleSheet.flatten([styles.button, viewStyles.button])}>
                                <Text style={styles.buttonText} onPress={this.onViewAnswer}>View</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    {!this.state.showQuestion && (
                        <View style={viewStyles.buttonPanel}>
                            <TouchableOpacity style={StyleSheet.flatten([styles.button, viewStyles.button, viewStyles.correctBtn])}>
                                <Text style={styles.buttonText} onPress={() => this.onNextCard(1)}>Correct</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleSheet.flatten([styles.button, viewStyles.button, viewStyles.wrongBtn])}>
                                <Text style={styles.buttonText} onPress={() => this.onNextCard(0)}>Incorrect</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
                );
    }
}

const viewStyles = StyleSheet.create({
    container:{
        backgroundColor: white,
    },
    header:{
        flex: 0.2,
        width:'100%',
        textAlign:'left',
    },
    headerText:{
        fontSize: variables.normalFontSize, 
        padding: variables.normalGap
    },
    textPanel:{
        flex: 0.4,
        width:'100%',
        textAlign:'center',
    },
    qnText : {
        fontSize: variables.largeFontSize,
        fontWeight: 'bold', 
        width:'100%',
        textAlign:'center'
    },
    button: { 
        justifyContent: 'center', 
        alignItems:'center'
    },
    correctBtn: {
        backgroundColor: green,
    }, 
    wrongBtn: {
        backgroundColor: red
    },
    textType: {
        fontSize: variables.normalFontSize,
        fontWeight: 'bold',
        color: red,
        textAlign: 'center',
        width:'100%'
    }, 
    buttonPanel: {
        width: '100%', 
        flex: 0.4, 
    }
});

export default QuizView;