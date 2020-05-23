import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { h, w } from './constants'

function change(num){
    let color = ''
    if (num < 0){
        color = 'red'
    }
    else{
        color = 'green'
    }

    return color
}


const Card = ({info}) => {
    const { container, price, name, image, up, down, hr, day } = styles

    return(
        <View style={container}>
            <View style={up}>
                <Image style={image} source={{uri: 'https://www.cryptocompare.com' + info.IMAGEURL}} />
                <Text style={name}>{info.FROMSYMBOL}</Text>
                <Text style={price}>{info.PRICE}₽</Text>
            </View>
            <View style={down}>
                <Text style={hr}>24h: </Text>
                <Text style={{height: 36, textAlignVertical: 'center', color: change(info.CHANGEPCT24HOUR)}}>{parseFloat(info.CHANGEPCT24HOUR).toFixed(3)} %</Text>

                <Text style={day}>1d: </Text>
                <Text style={{height: 36, textAlignVertical: 'center', color: change(info.CHANGEPCTDAY)}}>{parseFloat(info.CHANGEPCTDAY).toFixed(3)} %</Text>
            </View>
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

    up: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 4,
    },

    down:{
        height: 36,
        width: w,
        flex: 1,
        flexDirection: 'row',
        marginBottom: 4,
    },
    name: {
        height: 36,
        textAlignVertical: 'center',
        fontWeight: 'bold',
    },

    price: {
        fontSize: 15,
        height: 36,
        textAlignVertical: 'center',
        position: 'absolute',
        right: w * 0.02
    },

    hr: {
        height: 36,
        textAlignVertical: 'center',
        marginLeft: w * 0.02,
    },

    day: {
        height: 36,
        textAlignVertical: 'center',
        marginLeft: w * 0.5,
    },

    image: {
        width: w * 0.1,
        height: w * 0.1,
        resizeMode: 'contain',
        marginLeft: w * 0.05,
        marginTop: 2,
        marginRight: w * 0.05
    }
})

export default Card