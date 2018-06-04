import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'; 
import { limeGreen, blue, white, black, purple } from '../utils/colors'; 
import { styles } from '../styles/styles';

const listItem = (props) => {
    return (
        <View style={styles.listItem}>
            <TouchableOpacity onPress={props.onPress} style={styles.touchCard}>
                <Text style={styles.listItemTitle}>{props.item.title}</Text>
                <Text style={styles.listItemSubTitle}>{`${props.item.numCards} card(s)`}</Text>
            </TouchableOpacity>
        </View>
    ); 
}

export default listItem; 