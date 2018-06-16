import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, TextInput, Animated } from 'react-native'; 
import { styles, variables } from '../styles/styles';
import { NEW_DECK_QN_STR, NEW_DECK_ANS_STR } from '../constants/constants'; 
import * as API from '../utils/api'; 
import Question from '../models/Question'; 
import { white, red, black, green, purple, lightGray} from '../utils/colors'; 

class QuizView extends Component {

    state = {
        currentDeck: null, 
        currentIndex: 0,
        currentQuestion: null, 
        showQuestion: true, 
        endOfDeck: false, 
        numCorrect: 0,
    }

    componentDidMount = () => {
        let item = this.props.navigation.getParam('item'); 
        if (item) {
            let currentQuestion = item.questions && item.questions.length > 0 ? item.questions[0] : null;
            this.setState({currentDeck : item, currentQuestion: currentQuestion}); 
        }

        this.animatedValue = new Animated.Value(0);
        this.value = 0;
        this.animatedValue.addListener(({ value }) => {
            this.value = value;
        })
        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg']
        });
        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        });
    }

    onViewAnswer = () => {
        this.setState({showQuestion: false}); 
        this.flipCard(); 
    }

    onNextCard = (increment) => {
        let numCorrect = this.state.numCorrect + increment; 
        if (this.state.currentIndex < this.state.currentDeck.questions.length - 1) {
            let nextIndex = ++this.state.currentIndex; 
            let nextQn = this.state.currentDeck.questions[nextIndex];
            this.setState({showQuestion: true, currentQuestion: nextQn, numCorrect: numCorrect});
        } else {
            this.setState({endOfDeck : true, numCorrect: numCorrect}); 
        }
        this.flipCard(); 
    }

    onBack = () => {
        this.props.navigation.goBack(); 
    }

    onRestart = () => {
        this.setState({currentIndex: 0, currentQuestion: this.state.currentDeck.questions[0], endOfDeck: false, showQuestion: true, numCorrect: 0}); 
        this.flipCard(); 
    }

    flipCard = () => {
        if (this.value >= 90) { 
          Animated.spring(this.animatedValue,{
            toValue: 0,
            friction: 8,
            tension: 10
          }).start();
        } else {
          Animated.spring(this.animatedValue,{
            toValue: 180,
            friction: 8,
            tension: 10
          }).start();
        }
    
    }

    render(){
        let renderContent = null; 
        const frontAnimatedStyle = {
            transform: [{ rotateY: this.frontInterpolate}]
        }
        const backAnimatedStyle = {
            transform: [{ rotateY: this.backInterpolate}]
        }
        
        let style1 = [viewStyles.flipCard]; 
        if (this.frontInterpolate) {
            style1.push(frontAnimatedStyle); 
        }

        let style2 = [viewStyles.flipCard, viewStyles.flipCardBack];
        if (this.backInterpolate) {
            style2.unshift(backAnimatedStyle); 
        }
        let numQns = this.state.currentDeck && this.state.currentDeck.questions ? this.state.currentDeck.questions.length : 0;
        let displayIndex = `${this.state.currentIndex + 1} / ${numQns}`;
        if (this.state.endOfDeck) {
            let score = `You have ${this.state.numCorrect} out of ${numQns} correct questions`
            renderContent = (
                <View style={styles.container}>
                    <View style={viewStyles.header}>
                        <Text style={viewStyles.headerText}>{displayIndex}</Text>
                    </View>
                    <View style={[viewStyles.textPanel,viewStyles.resultPanel]}>
                        <Text style={viewStyles.resultText}>{score}</Text>
                    </View>
                    <View style={viewStyles.buttonPanel}>
                        <TouchableOpacity style={StyleSheet.flatten([styles.button, viewStyles.button])} onPress={this.onRestart}>
                            <Text style={styles.buttonText}>Restart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={StyleSheet.flatten([styles.button, viewStyles.button])} onPress={this.onBack}>
                            <Text style={styles.buttonText}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } else if (numQns === 0) {
            let msg = "There isn't any card added to this deck. Please add a new card";
            renderContent = (
                <View style={styles.container}>
                    <View style={[viewStyles.textPanel,viewStyles.resultPanel]}>
                        <Text style={viewStyles.resultText}>{msg}</Text>
                    </View>
                    <View style={viewStyles.buttonPanel}>
                        <TouchableOpacity style={StyleSheet.flatten([styles.button, viewStyles.button])} onPress={this.onBack}>
                            <Text style={styles.buttonText}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )

        } else {
            let displayText = this.state.showQuestion && this.state.currentQuestion ? this.state.currentQuestion.question : 
            this.state.currentQuestion ? this.state.currentQuestion.answer : ''; 

            let displayType = this.state.showQuestion ? 'Question' : 'Answer'; 

            renderContent = this.state.showQuestion ?  (
                        <View style={styles.container}>
                            <View style={viewStyles.header}>
                                <Text style={viewStyles.headerText}>{displayIndex}</Text>
                            </View>
                            <Animated.View style={[style1, viewStyles.textPanel]}>
                                <Text style={viewStyles.qnText}>{displayText}</Text>
                                <Text style={viewStyles.textType}>{displayType}</Text>
                            </Animated.View >
                            <View style={viewStyles.buttonPanel}>
                                <TouchableOpacity style={StyleSheet.flatten([styles.button, viewStyles.button])} onPress={this.onViewAnswer}>
                                    <Text style={styles.buttonText}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        ) : (
                        <View style={styles.container}>
                            <View style={viewStyles.header}>
                                <Text style={viewStyles.headerText}>{displayIndex}</Text>
                            </View>
                            <Animated.View style={[style2,viewStyles.textPanel]}>
                                <Text style={viewStyles.qnText}>{displayText}</Text>
                                <Text style={viewStyles.textType}>{displayType}</Text>
                            </Animated.View>
                            <View style={viewStyles.buttonPanel}>
                                <TouchableOpacity style={StyleSheet.flatten([styles.button, viewStyles.button, viewStyles.correctBtn])}  onPress={() => this.onNextCard(1)}>
                                    <Text style={styles.buttonText}>Correct</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={StyleSheet.flatten([styles.button, viewStyles.button, viewStyles.wrongBtn])} onPress={() => this.onNextCard(0)}>
                                    <Text style={styles.buttonText} >Incorrect</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                );
        }

        return renderContent; 
        
    }
}

const viewStyles = StyleSheet.create({
    header:{
        flex: 0.1,
        width:'100%',
    },
    headerText:{
        fontSize: variables.normalFontSize, 
        padding: variables.normalGap,
        color: black
    },
    textPanel:{
        flex: 0.5,
        width:'90%'
    },
    resultText:{
        fontSize: variables.largeFontSize,
        fontWeight: 'bold', 
        width:'100%',
        textAlign:'center',
        color:black
    },
    resultPanel:{
        justifyContent:'center', 
        alignItems:'center'
    },
    qnText : {
        fontSize: variables.largeFontSize,
        fontWeight: 'bold', 
        width:'100%',
        textAlign:'center',
        color:white
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
        flex: 0.4
    },
    flipCard: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: purple,
        backfaceVisibility: 'hidden',
        borderRadius: variables.defaultBorderRadius
      },
    flipCardBack: {
        backgroundColor: purple
    },
    flipText: {
        width: 90,
        fontSize: 20,
        color: purple,
        fontWeight: 'bold',
    }
});

export default QuizView;