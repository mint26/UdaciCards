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
        return AsyncStorage.setItem(deckKey, JSON.stringify(deck)); 
    }
    return Promise.reject(); 
}
