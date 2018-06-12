import { AsyncStorage } from 'react-native'
import { DECK_KEY, UDACI_STORE, LAST_VISITED_DATE} from '../constants/constants'; 

const getDeckKey = (id) => {
    return `${DECK_KEY}:${id}`; 
}

export async function getDecks(){
    let allDecks = await getAllDecks(); 
    return allDecks; 
}

function getAllDecks(){
    return AsyncStorage.getAllKeys().then(keys => {
        if (keys && keys.length > 0) {
            return AsyncStorage.multiGet(keys); 
        }
    })
}

export async function getDeck(deckId) {
    let deckKey = await getDeckKey(deckId); 
    let deck = await AsyncStorage.getItem(deckKey);
    return deck; 
}

export async function addDeck(deck){
    if (deck) {
        let deckKey = getDeckKey(deck.deckId); 
        let output = await AsyncStorage.setItem(deckKey, JSON.stringify(deck));
        return output;  
    }
}

export async function addCard(deck) {
    let output;
    if (deck) {
        let deckKey = getDeckKey(deck.deckId); 
        output = await AsyncStorage.setItem(deckKey, JSON.stringify(deck));

    }
    return output; 
}

export async function setLastVisitedDate() {
    let visitedDate = new Date(); 
    return await AsyncStorage.setItem(LAST_VISITED_DATE, JSON.stringify(visitedDate)); 
}

export async function getLastVisitedDate() {
    return await AsyncStorage.getItem(LAST_VISITED_DATE); 
}