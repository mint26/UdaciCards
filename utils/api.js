import { AsyncStorage } from 'react-native'
import { DECK_KEY, UDACI_STORE } from '../constants/constants'; 

const getDeckKey = (id) => {
    return `${DECK_KEY}:${id}`; 
}

export const getDecks = () => {
    return AsyncStorage.getAllKeys().then(keys => {
        if (keys && keys.length > 0) {
            return AsyncStorage.multiGet(keys); 
        }
    })
}

export const getDeck = (key) => {
    return AsyncStorage.getItem(key);
}

export const addDeck = (deck) => {

    if (deck) {
        let deckKey = getDeckKey(deck.deckId); 
        let output = AsyncStorage.setItem(deckKey, JSON.stringify(deck));
        return output;  
    }
}

export const addCard = (question, deckId) => {
    let deckKey = getDeckKey(deckId); 
    return getDeck(deckKey).then(item => {
        let deck = JSON.parse(item);  
        
        if (deck) {
            if (!deck.questions || !Array.isArray(deck.questions)) {
                deck.questions = []; 
            }
            deck.questions.push(question); 
            deck.numCards = deck.questions.length; 
            let output =  AsyncStorage.setItem(deckKey, JSON.stringify(deck));
            return output; 
        }
    })
    
}