


import React from 'react'
import { StyleSheet, View , Animated , useWindowDimensions } from 'react-native'

const Indicator = ({data , scrollX}) => {

    const {width} = useWindowDimensions() ;

    return (
        <View style={styles.container}>

            {data.map((_ , i) => {

                const inputRange = [(i - 1) * width , i * width , (i+1) * width ] ;
                const indicatorWith = scrollX.interpolate({
                    inputRange ,
                    outputRange : [10 , 20 , 10] ,
                    extrapolate: 'clamp'
                })
                const opacity = scrollX.interpolate({
                    inputRange ,
                    outputRange : [0.4 , 1 , 0.4] ,
                    extrapolate: 'clamp'
                })
                return  <Animated.View key={i.toString()} style={[styles.dot , {width : indicatorWith , opacity}]}/>;
            })}
        </View>
    )
}

export default Indicator

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection : 'row' ,
        alignItems: 'center',
    },
    dot : {
        height: 10 ,
        borderRadius : 5 ,
        backgroundColor : "#f2b203" ,
        marginHorizontal : 8 ,
    }
})