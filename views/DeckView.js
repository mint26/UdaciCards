import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, TextInput } from 'react-native'; 
import { styles } from '../styles/styles';

class DeckView extends Component {

    state = {
        currentDeck: null 
    }

    componentDidMount() {        
        let item = this.props.navigation.getParam('item');
        if (item) {
            console.log('ITEM', item); 
            this.setState({currentDeck: item});
        }
    }
    onAddCard = () => {
        this.props.navigation.navigate('IndividualDeckView', {item: this.state.currentDeck});
    }

    onStartQuiz = () => {
        this.props.navigation.navigate('QuizView', {item: this.state.currentDeck});
    }

    render(){
        return (
                <View>
                    <Text>{this.state.currentDeck ? this.state.currentDeck.title : ''}</Text>
                    <Text>{`${this.state.currentDeck ? this.state.currentDeck.numCards : 0} cards`}</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={this.onAddCard}>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={this.onStartQuiz}>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
                );
    }
}

export default DeckView;