import { Text, View, FlatList } from 'react-native'; 
import React, { Component } from 'react'
import ListItem from '../components/ListItem'; 
import Deck from '../models/Deck'; 
import * as API from '../utils/api';

class DeckListView extends Component {
    
    state = {
        decks : [] 
    }; 

    componentDidMount(){
        API.getDecks().then(decks => {
            if (decks.length > 0) {
                let items = decks.map(deck => {
                    let deckItem = JSON.parse(deck[1]); 
                    if (deckItem){
                        return new Deck(deckItem.deckId, deckItem.title, deckItem.questions);; 
                    }
                }); 
                this.setState({decks : items}); 
            }
        });
    }

    onDeckSelected = (item) => {
        console.log('on deck selected', item); 
        this.props.navigation.navigate('DeckView', {item: item}); 
    }

    renderItem = ({ item }) => {
        return <ListItem item = {item} key={`list-item-${item.deckId}`} onPress={() => {this.onDeckSelected(item);}}/>
    }

    render() {
        return <FlatList style={{flex: 1}} data={this.state.decks} renderItem={this.renderItem}/>; 
    }
}

export default DeckListView;