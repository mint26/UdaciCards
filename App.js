import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewDeckView from './views/NewDeckView'; 
import StatusBar from './components/StatusBar'; 
import { purple, limeGreen } from './utils/colors'; 
import MainNavigator from './components/MainNavigator'; 
import { setLocalNotification } from './utils/utils'; 
import { setLastVisitedDate } from './utils/api'; 

export default class App extends React.Component {

  componentDidMount() {
    setLastVisitedDate().then(() => {
      setLocalNotification();
    }); 
  }

  componentDidUpdate() {
    setLastVisitedDate(); 
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
