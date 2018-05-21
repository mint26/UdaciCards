import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, TextInput } from 'react-native'; 

class DeckView extends Component {


    render(){
        let item = this.props.navigation.getParam('item'); 
        console.log('deck view item', item); 
        return (
                <View>
                    <Text>{JSON.stringify(item)}</Text>
                </View>
                );
    }
}

export default DeckView;