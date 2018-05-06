import React from 'react'
import { View, Platform, StatusBar } from 'react-native'
import { Constants } from 'expo'

const statusBar = ({backgroundColor, ...props}) => {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
          <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

export default statusBar; 