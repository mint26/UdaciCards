import { createBottomTabNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'; 
import { isAndroid } from '../utils/utils';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { white, purple, limeGreen } from '../utils/colors'; 
import NewDeckView from '../views/NewDeckView'; 
import DeckListView from '../views/DeckListView'; 
import NewCardView from '../views/NewCardView';
import QuizView from '../views/QuizView';
import DeckView from '../views/DeckView';
import React from 'react';
import { View } from 'react-native';

const IOS_ROUTE_CONFIG = {
    DeckListView: {
      screen: DeckListView,
      navigationOptions: {
        tabBarLabel: 'My Decks',
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-albums' size={30} color={tintColor} />,
        headerMode: 'none'
      },
    },
    NewDeckView: {
      screen: NewDeckView,
      navigationOptions: {
        title: 'New Deck',
        tabBarLabel: 'New Deck',
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />,
        headerMode: 'none'
      },
    }
}

const NAVIGATOR_OPTIONS = { 
    tabBarOptions: {
      activeTintColor: white,
      style: {
        height: 60,
        backgroundColor: purple,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
};


const Tab = () => {
    if (isAndroid()) {
        return createMaterialTopTabNavigator(IOS_ROUTE_CONFIG, NAVIGATOR_OPTIONS); 
    } else {
        return createBottomTabNavigator(IOS_ROUTE_CONFIG , NAVIGATOR_OPTIONS); ; 
    }
}

const headerStyle = {
  headerStyle : { backgroundColor: purple }, 
  headerTitleStyle: { color: white }, 
  headerTintColor: limeGreen
};

const MainNavigator = createStackNavigator({
  App: {
        screen: Tab(),
        navigationOptions: ({ navigation }) => {
          return {
            header: () => null
          }
        }
  }, 
  NewCardView: {
      screen: NewCardView,
      navigationOptions: ({ navigation }) => {
        return Object.assign({title: `Add Card`}, headerStyle); 
      },
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: ({ navigation }) => {
      return Object.assign({title: `${navigation.state.params.title}`}, headerStyle); 
    }
  }, 
  QuizView: {
    screen: QuizView,
    navigationOptions: ({ navigation }) =>  {
      return Object.assign({title: `Quiz`}, headerStyle); 
    }
  }
});

export default MainNavigator; 