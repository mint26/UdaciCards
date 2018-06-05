import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, TextInput } from 'react-native'; 
import { styles, variables } from '../styles/styles';
import { limeGreen, blue, white, black, purple } from '../utils/colors'; 
class DeckView extends Component {

    state = {
        currentDeck: null, 
        hasQuestion: false
    }

    componentDidMount() {        
        let item = this.props.navigation.getParam('item');
        if (item) {
            this.setState({currentDeck: item, hasQuestion: item.questions && item.questions.length > 0 ? true : false});
        }
    }
    onAddCard = () => {
        this.props.navigation.navigate('IndividualDeckView', {item: this.state.currentDeck});
    }

    onStartQuiz = () => {
        this.props.navigation.navigate('QuizView', {item: this.state.currentDeck});
    }

    render(){

        let startBtnStyle = this.state.hasQuestion ? StyleSheet.flatten([styles.button, viewStyles.button]) : StyleSheet.flatten([styles.button, viewStyles.button, viewStyles.disabled]);
        return (
                <View style={StyleSheet.flatten([styles.container, viewStyles.container])}>
                    <View style={styles.row}>
                        <Text style={viewStyles.title}>{this.state.currentDeck ? this.state.currentDeck.title : ''}</Text>
                        <Text style={viewStyles.subtitle}>{`${this.state.currentDeck ? this.state.currentDeck.numCards : 0} cards`}
                        </Text>
                    </View>
                    <TouchableOpacity style={StyleSheet.flatten([styles.button, viewStyles.button])} onPress={this.onAddCard}>
                        <Text style={styles.buttonText}>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleSheet.flatten([styles.button, viewStyles.button])} onPress={this.onStartQuiz}>
                        <Text style={styles.buttonText}>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
                );
    }
}

const viewStyles = StyleSheet.create({
    container:{
        backgroundColor: white
    },
    title : {
        fontSize: variables.largeFontSize, 
        fontWeight: 'bold'
    }, 
    subtitle : {
        fontSize: variables.normalFontSize
    }, 
    button: { 
        margin: variables.smallGap, 
        width:'70%', 
        flex: 0.1, 
        justifyContent: 'center', 
        alignItems:'center',
        opacity: 1
    }, 
    disabled: {
        opacity: 0.5
    }
});

export default DeckView;