import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

const SlideItem = ({ slide }) => {
    const { width } = useWindowDimensions();
    const lastWordIndex = slide.title.lastIndexOf(" ")

    return (
        <View style={[styles.container, { width }]}>
            <Text style={styles.title}>{slide.title.substring(0 , lastWordIndex)}</Text>
            <View style={styles.titleContainer} >
                <Text style={[styles.title , {color: 'white' , marginBottom: 0}]}>{slide.title.substring(lastWordIndex)}</Text>
            </View>

            <Text style={styles.description}>{slide.description}</Text>
        </View>
    );
};

export default SlideItem;

const styles = StyleSheet.create({
    container: {
        alignItems : 'center',
    },
    title: {
        fontWeight: "800",
        fontSize: 20,
        marginBottom: 10,
        color: "#f2b203",
        textAlign: "center",
    },
    titleContainer : {
        backgroundColor : "#24b6ad" ,
        minWidth : 150 ,
        alignItems : 'center' ,
        padding : 3 ,
        marginBottom : 12 ,
    },
    description: {
        fontWeight: "300",
        fontSize : 18 ,
        color: "#e1e1e2",
        textAlign: "center",
        paddingHorizontal: 16,
    },
});
