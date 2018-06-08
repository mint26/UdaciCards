import React from 'react'
import { View,TouchableOpacity, Text, StyleSheet  } from 'react-native'
import { Constants } from 'expo'
import { styles, variables } from '../styles/styles';
import { limeGreen, black, white, purple } from '../utils/colors'; 

const modal = ({leftBtn, rightBtn, message}) => {
    return (
        <View style={[cmpStyles.box]}>
            <Text style={cmpStyles.message}>{message}</Text>
            <TouchableOpacity style={styles.button} onPress={leftBtn.action}>
                <Text style={styles.buttonText}>{leftBtn.text}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={rightBtn.action}>
                <Text style={styles.buttonText}>{rightBtn.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const cmpStyles = StyleSheet.create({
    box: {
        borderWidth: 5, 
        borderColor: black, 
        borderRadius: variables.defaultBorderRadius, 
        backgroundColor: purple
    }, 
    message: {
        fontSize: variables.largeFontSize,
        color: white
    }
});

export default modal; 