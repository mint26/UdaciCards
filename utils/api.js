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

export async const addDeck = (deck) => {
    try{
        if (deck) {
            let deckKey = getDeckKey(deck.deckId); 
            let output = await AsyncStorage.setItem(deckKey, JSON.stringify(deck));
            return output;  
        }
    } catch {
        console.log('add deck not working');
    }
}

export async const addCard = (question, deckId) => {
    try{
        let deckKey = getDeckKey(deckId); 
        let deck = getDeck(deckKey); 
        if (deck) {
            if (!deck.questions || !Array.isArray(deck.questions)) {
                deck.questions = []; 
            }
            deck.questions.push(question); 
            deck.numCards = deck.questions.length; 
            let output =  await AsyncStorage.setItem(deckKey, JSON.stringify(deck));
            return output; 
        }
    } catch {
        console.log('not working');
    }

}