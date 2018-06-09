import { StyleSheet } from 'react-native'; 
import { limeGreen, blue, white, black, purple } from '../utils/colors'; 

export const variables = {
largeFontSize: 30,
normalFontSize: 20, 
smallFontSize: 10, 
largeGap: 30,
normalGap: 20, 
smallGap: 10,
xsmallGap: 5,
noGap: 0,
largeBorderRadius: 15,
defaultBorderRadius: 10,
smallBorderRadius: 5
};
 
// standard styles object here
export const styles = StyleSheet.create({
  text: {
    fontSize: variables.normalFontSize
  },
  input: {
      borderRadius: variables.defaultBorderRadius, 
      width:'80%',
      margin: variables.normalGap, 
      padding: variables.normalGap,
      backgroundColor: white,
      color: black
  },
  button: { 
    margin: variables.normalGap, 
    padding: variables.normalGap, 
    backgroundColor: purple,
    borderRadius: variables.defaultBorderRadius
  }, 
  buttonText: {
    color:white,
    fontWeight:'bold',
    fontSize: variables.normalFontSize
  },
  card: {
      backgroundColor: limeGreen,
      margin: variables.normalGap, 
      borderRadius: variables.defaultBorderRadius,
      alignItems: 'center',
      justifyContent: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  row: {
    width: '100%',
    padding: variables.normalGap,
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  touchCard: {
    width: '100%',
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: variables.largeGap,
    borderBottomColor: black, 
    borderBottomWidth:2
  },
  listItem : {
    backgroundColor: limeGreen,
    borderBottomColor: purple,
    borderRadius: variables.defaultBorderRadius,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  listItemTitle : {
      fontSize: variables.normalFontSize, 
      fontWeight:'bold',
      marginBottom: variables.normalGap
  }, 
  listItemSubTitle : {
      fontSize: variables.smallFontSize
  }
});