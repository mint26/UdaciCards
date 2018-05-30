export default class Question {
    constructor(questionId, question, answers) {
        this.questionId = questionId; 
        this.question = question; 
        this.answer = answers ?  answers : ''; 
    }
}