import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewDeckView from './views/NewDeckView'; 
import StatusBar from './components/StatusBar'; 
import { purple, limeGreen } from './utils/colors'; 
import MainNavigator from './components/MainNavigator'; 
import { setLocalNotification, updateLastVisit } from './utils/utils'; 

export default class App extends React.Component {

  componentDidMount() {
    updateLastVisit(); 
    setLocalNotification();
  }

  componentDidUpdate() {
    updateLastVisit(); 
  }

  render() {
    return (
      <View style={styles.container}>  
        <StatusBar backgroundColor={purple} barStyle="light-content" />
        {/* <NewDeckView style={{flex:1}}/> */}
        <MainNavigator />
        {/* {Tab()} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  
});
