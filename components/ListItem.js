import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native'; 
import { limeGreen, blue, white, black, purple } from '../utils/colors'; 

const listItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.listItemTitle}>{props.item.title}</Text>
            <Text style={styles.listItemSubTitle}>{`${props.item.numCards} card(s)`}</Text>
        </View>
    ); 
}

const styles = StyleSheet.create({ 
    listItem : {
        backgroundColor: limeGreen,
        borderStyle: 'solid', 
        borderBottomWidth: 1,
        borderBottomColor: purple, 
        padding: 20,
        borderRadius:8,
        alignItems: 'center',
        justifyContent: 'center'
        
    }, 
    listItemTitle : {
        fontSize:25, 
        fontWeight:'bold',
        marginBottom:20
    }, 
    listItemSubTitle : {
        fontSize:15
    }
});

export default listItem; 