import React from 'react'
import { View,TouchableOpacity, Text, StyleSheet, Modal } from 'react-native'
import { Constants } from 'expo'
import { styles, variables } from '../styles/styles';
import { limeGreen, black, white, purple, lightGray } from '../utils/colors'; 

const modal = ({leftBtn, rightBtn, message, visible}) => {
    return (
        <Modal
            animationType="fade"
            transparent={false}
            visible={visible}
            onRequestClose={() => {
                alert('Modal has been closed.');
            }}
            transparent={true}
            presentationStyle="overFullScreen">
            <View style={cmpStyles.container}>
                <View style={cmpStyles.box}>
                    <View style={cmpStyles.msgBox}>
                        <Text style={cmpStyles.message}>{message}</Text>
                    </View>
                    <View style={cmpStyles.btnPanel}>
                        <TouchableOpacity style={[styles.button, cmpStyles.button]} onPress={leftBtn.action}>
                            <Text style={[styles.buttonText,cmpStyles.buttonText]}>{leftBtn.text}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, cmpStyles.button]} onPress={rightBtn.action}>
                            <Text style={[styles.buttonText,cmpStyles.buttonText]}>{rightBtn.text}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const cmpStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height:'100%'
    },
    box: {
        borderWidth: 3, 
        borderColor: lightGray, 
        borderRadius: variables.defaultBorderRadius, 
        backgroundColor: white,
        padding: variables.normalGap,
        margin: variables.smallGap,
        height: '40%'
    }, 
    msgBox:{
        marginBottom: variables.normalGap,
        flex: 0.5
    },
    message: {
        fontSize: variables.largeFontSize,
        color: black,
        textAlign:'center', 
        fontWeight: 'bold',
    },
    btnPanel: {
        flexDirection: 'row', 
        flex: 0.5,
        justifyContent: 'space-between',
    },
    button: {
        flex: 0.49,
        marginLeft: 0,
        marginRight:0
    },
    buttonText: {
        fontSize: variables.normalFontSize, 
        textAlign:'center'
    }
});

export default modal; 