# UdaciCards

This is the final project for Udacity's React Fundamentals Course. The goal of this application is to build a mobile application (Android or iOS - or both) that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks

## Getting Started

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`
* make sure you have the expo app installed in your testing devices
* scan the qr code using your testing devices
* applicable for both android and ios 
* tested using emulators (android: v7.1.0 API 25, iOS: v9.2) and phone devices (iOS: v11.4, android: v6.0.1) 

### Prerequisites

* Make sure you have installed NodeJS. 

### Project Structure
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── App.js # This is the root of your app. Contains static HTML right now.
├── App.json # Application json file for storing configuration 
├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
├── .gitignore # git configuration file
├── .babelrc # Babel configuration file
├── .watchmanconfig # File watching service configuration file
├── models/ # Data models for the app
│   ├── Deck.js # Used to store the deck object
│   ├── Question.js # Used to store the question object
├── components/ # This is where the react components required for this app are placed in. 
        ├── ListItem.js # The list item in the flat list
        ├── MainNavigator.js # Handle the navigation of the app
        ├── Modal.js # Custom modal for the app
        ├── StatusBar.js # Status bar component for the app 
├── constants/ # Shared constants
│   ├── constants.js # Contains string constants
├── utils/ # Shared services
│   ├── api.js # API to save data on local storage
│   ├── colors.js # Color constants
│   ├── utils.js # Common utility functions
├── views/ # The main views for the app
│   ├── DeckListView.js # React container for a list of decks
│   ├── DeckView.js # React container for selected deck
│   ├── NewCardView.js # React container for adding new card
│   ├── NewDeckView.js # React container for adding new deck
│   ├── QuizView.js # React container for ongoing quiz
├── styles/ # Styles for your app. Feel free to customize this as you desire.
│   ├── styles.js # Global style object


```

## User Stories

[*] Use create-react-native-app to build your project

[*] Allow users to create a deck which can hold an unlimited number of cards

[*] Allow users to add a card to a specific deck

[*] The front of the card should display the question.

[*] The back of the card should display the answer.

[*] Users should be able to quiz themselves on a specific deck and receive a score once they're done.

[*] Users should receive a notification to remind themselves to study if they haven't already for that day.

## Video Walkthrough
iOS Demo <br/>

![ezgif com-video-to-gif 1](https://user-images.githubusercontent.com/25121123/41495821-fc89cdde-7162-11e8-8504-6297d898e555.gif)

<br/> Android Demo <br/>
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/25121123/41495822-fcb78012-7162-11e8-81fd-221bdfe17bb0.gif)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Tan Hui Min** - *Final Udacity React-Native Project* - [Udacicards](https://github.com/mint26/Udacicards)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

