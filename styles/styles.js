import { StyleSheet } from 'react-native'; 
import { limeGreen, blue, white, black, purple } from '../utils/colors'; 

// standard styles object here
export const styles = StyleSheet.create({
    text: {
      fontSize: 25,
      fontWeight: 'bold', 
      margin:20
    },
    input: {
        borderRadius:8, 
        width:'80%',
        margin:20, 
        padding:20,
        backgroundColor: white,
        color: black
    },
    button: { 
      margin: 20, 
      padding: 20, 
      backgroundColor: purple,
      borderRadius: 8
    }, 
    buttonText: {
      color:white,
      fontWeight:'bold',
      fontSize:20
    },
    card: {
        backgroundColor: limeGreen,
        margin:20, 
        borderRadius:8,
        alignItems: 'center',
        justifyContent: 'center'
    }
});