# UdaciCards

This is the final project for Udacity's React Fundamentals Course. The goal of this application is to build a mobile application (Android or iOS - or both) that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks

## Getting Started

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`
* make sure you have either the expo app installed in your testing devices or simulators such as `genymotion` 

### Prerequisites

* Make sure you have installed NodeJS. 

### Project Structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── components/ # This is where the react components required for this app are placed in. 
        ├── Book.js # The component used to render individual book on the shelf and the search result
        ├── Bookshelf.js # The component which is used to contain rows of books in accordance to its category.
        ├── Row.js # The component used to group book of same category together. 
        ├── Search.js # The component for the search input and display the search result. 
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └

```

## User Stories

[ ] Use create-react-native-app to build your project

[ ] Allow users to create a deck which can hold an unlimited number of cards

[ ] Allow users to add a card to a specific deck

[ ] The front of the card should display the question.

[ ] The back of the card should display the answer.

[ ] Users should be able to quiz themselves on a specific deck and receive a score once they're done.

[ ] Users should receive a notification to remind themselves to study if they haven't already for that day.

## Video Walkthrough


## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Tan Hui Min** - *Final Udacity React Project* - [MyReads](https://github.com/mint26/myreads)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

