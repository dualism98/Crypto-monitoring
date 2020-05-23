import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { h, w } from './constants'

const header = props => {
    const { container, text} = styles

    return(
        <View style={container}>
            <Text style={text}>
                Криптовалютный мониторинг
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: w,
        height: 80,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        justifyContent: 'flex-end',
    },

    text: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    }
})

export default header