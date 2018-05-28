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
    console.log('API ADD DECK', deck); 
    if (deck) {
        let deckKey = getDeckKey(deck.deckId); 
        console.log('API ADD DECK CALLING', deckKey);
        return AsyncStorage.setItem(deckKey, JSON.stringify(deck)); 
    }
    return Promise.reject(); 
}

export const addCard = (question, deckId) => {
    let deckKey = getDeckKey(deckId); 
    let deck = getDeck(deckKey); 
    if (deck) {
        deck.question.push(question); 
        return AsyncStorage.setItem(deckKey, JSON.stringify(updatedDeck)); 
    }
    return Promise.reject();
}