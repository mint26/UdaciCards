import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewDeckView from './views/NewDeckView'; 
import StatusBar from './components/StatusBar'; 
import { purple, limeGreen } from './utils/colors'; 
export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>  
        <StatusBar backgroundColor={purple} barStyle="light-content" />
        <NewDeckView style={{flex:1}}/>
      </View>

      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>{this.state.decks}</Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  
});
