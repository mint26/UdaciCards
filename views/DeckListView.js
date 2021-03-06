import { Text, View, FlatList } from 'react-native'; 
import React, { Component } from 'react'
import ListItem from '../components/ListItem'; 
import Deck from '../models/Deck'; 
import * as API from '../utils/api';
import { styles } from '../styles/styles';

class DeckListView extends Component {
    
    state = {
        decks : [] 
    }; 
    _keyExtractor = (item, index) => `list-item-${index}`;

    componentDidMount(){
        API.getDecks().then(decks => {
            if (decks && decks.length > 0) {
                let items = decks.map(deck => {
                    let deckItem = JSON.parse(deck[1]); 
                    if (deckItem){
                        return new Deck(deckItem.deckId, deckItem.title, deckItem.questions);; 
                    }
                }); 
                this.setState({decks : items}); 
            }
        })
        .catch(err => {
            console.log('ERROR', err); 
        });
    }

    componentDidUpdate(){
        API.getDecks().then(decks => {
            if (decks && decks.length > 0) {
                let items = decks.map(deck => {
                    let deckItem = JSON.parse(deck[1]); 
                    if (deckItem){
                        return new Deck(deckItem.deckId, deckItem.title, deckItem.questions);; 
                    }
                }); 
                if (this.state.decks.length !== decks.length) {
                    this.setState({decks : items}); 
                }
                    
            }
        });
    }

    onDeckSelected = (item) => {
        this.props.navigation.navigate('DeckView', {itemId: item.deckId, title: item.title}); 
    }

    renderItem = ({ item, index }) => {
        return <ListItem item = {item} key={`list-item-${index}`} onPress={() => {this.onDeckSelected(item);}}/>
    }

    renderNoItem = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>No deck created</Text>
            </View>
        );
    }

    render() {
        return this.state.decks.length > 0 ? 
        <FlatList style={{flex: 1}} data={this.state.decks} renderItem={this.renderItem} keyExtractor={this._keyExtractor}/> : 
        this.renderNoItem(); 
    }
}

export default DeckListView;