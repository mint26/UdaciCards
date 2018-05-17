import { Text, View } from 'react-native'; 
import React, { Component } from 'react'
import ListItem from '../components/ListItem'; 
import Deck from '../models/Deck'; 

class DeckListView extends Component {
    
    state = {
        decks : [
            new Deck('test', 'testing', [{question: 'hello'}]),
            new Deck('test1', 'Hello This is a test', []),
            new Deck('test2', 'One MOre time', [{question: 'hello'}])
        ]
    }; 

    render() {
        let listItems = this.state.decks.map(deck => {
            return <ListItem item = {deck} key={`list-item-${deck.deckId}`}/>
        })
        return (
                <View style={{flex: 1}}>
                    {listItems}
                </View>
                ); 
    }
}

export default DeckListView;