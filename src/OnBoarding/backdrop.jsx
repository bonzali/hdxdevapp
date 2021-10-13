import React from "react";
import {useWindowDimensions , Image , View} from "react-native";

const BackDrop = () => {
    const {width , height} = useWindowDimensions() ;
    return (
        <View style={{position : 'absolute'  ,  top:0 ,  backgroundColor :"#f2b203", }}   >
            <Image style={{resizeMode : 'cover' , width ,height: height * 0.7}} source={require("../../assets/bg1.jpeg")}/>
        </View>
    )
}

export  default BackDrop