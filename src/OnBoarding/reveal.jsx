import React , {useState , useEffect , useRef} from 'react'
import { StyleSheet, Text, View , ActivityIndicator, Animated ,  } from 'react-native'

const Reveal = ({children}) => {

    const animationValue = useRef(new Animated.Value(0)).current ;
    const [animationCompleted, setAnimationCompleted] = React.useState(false);

    useEffect(()=>{
        startAnimation() 
    }, [])

    const startAnimation = () => {
        Animated.timing(animationValue , {
            toValue : 1 , 
            duration : 1500 ,
            useNativeDriver : false ,
        }).start(onAnimationCompleted)
     }

     const onAnimationCompleted = () => {
        setAnimationCompleted(true);
    };

     const opacity = animationValue.interpolate({
        inputRange : [0,0.8, 1] ,
        outputRange: [1,0.2, 0],
    })

    const scale = animationValue.interpolate({
        inputRange : [0, 1] ,
        outputRange: [0 , 50],
    })


    const contentOpacity = animationValue.interpolate({
        inputRange : [0 ,0.7 , 1] ,
        outputRange: [0 ,0.9, 1],
    })
   

    return (
        <View style={[styles.container]}>
                <Animated.View style={{opacity : contentOpacity}}>
                       {children}
                   </Animated.View>
                   {animationCompleted ? null :<Animated.View style={[styles.spreadContainer , {opacity} , {transform : [ {scale}]}]}/>
}
        </View>
    )
}

export default Reveal

const styles = StyleSheet.create({
    container : {
        ...StyleSheet.absoluteFillObject,
        backgroundColor : "#f7f7f7" ,
        flex : 1 ,
        alignItems : 'center',
        justifyContent: 'center',
    } ,
    spreadContainer : {
        backgroundColor : 'white' , 
        position : 'absolute' ,
        borderRadius: 30,
        width: 60,
        height: 60,
    }
})
