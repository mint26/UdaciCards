export default class Deck {
    constructor(deckId, title, questions){
        this.deckId = deckId; 
        this.title = title; 
        this.questions = questions ? questions : []; 
    }
}