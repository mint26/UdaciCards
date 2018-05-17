import { createBottomTabNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'; 
import { isAndroid } from '../utils/utils';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { white, purple } from '../utils/colors'; 
import NewDeckView from '../views/NewDeckView'; 
import DeckListView from '../views/DeckListView'; 
import React from 'react';
import { View } from 'react-native';

const IOS_ROUTE_CONFIG = {
    NewDeckView: {
      screen: NewDeckView,
      navigationOptions: {
        title: 'New Deck',
        tabBarLabel: 'New Deck',
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
      },
    }, 
    DeckListView: {
        screen: DeckListView,
        navigationOptions: {
          tabBarLabel: 'My Decks',
          tabBarIcon: ({ tintColor }) => <Ionicons name='ios-albums' size={30} color={tintColor} />
        },
    } 
}

const NAVIGATOR_OPTIONS = {
    navigationOptions: {
      header : {
        visible: false
      }
    }, 
    tabBarOptions: {
      activeTintColor: isAndroid() ? purple : white,
      style: {
        height: 56,
        backgroundColor: isAndroid() ? purple : purple,
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
        return createMaterialTopTabNavigator(IOS_TAB, NAVIGATION_OPTIONS); 
    } else {
        return createBottomTabNavigator(IOS_ROUTE_CONFIG , NAVIGATOR_OPTIONS); ; 
    }
}

const MainNavigator = createStackNavigator({
  App: {
        screen: Tab(),
   }
});

export default MainNavigator; 