import React from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";

const topContent = () => {

   const _statsView = (total , title) => {
     return <View style={styles.statsView}>
         <Text style={styles.statsTotal}>{total}</Text>
         <Text style={styles.statsTitle}>{title}</Text>
     </View>
  }
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require("../../assets/bg2.jpg")}/>
        <Text style={styles.name}>Lois Adjetey Annan</Text>
        <View style={ styles.statsContainer}>
          {_statsView(137 , 'Projects')}
          {_statsView(124 , 'Followers')}
          <View style={styles.followButtonWrap}>
            <TouchableOpacity onPress={()=> {}} style={styles.button} activeOpacity={0.6}>
              <Text style={styles.statsTotal}>Follow</Text>
            </TouchableOpacity>
          </View>

        </View>
    </View>
  );
};

export default topContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position : "absolute",
    width : "100%" ,
    height :"60%",
    alignItems: "center",
    justifyContent : "center" ,
    backgroundColor :  "rgba(0,0,0,0.5)",
    paddingBottom : "17%"
  },

  image : {
    width : 80 ,
    height : 80 ,
    borderRadius : 40 ,
    borderColor : 'white',
    borderWidth : 2 ,
  },
  name : {
    fontWeight : '800' ,
    color : 'white',
    paddingVertical : 12 ,
  },
  statsContainer : {
    alignItems : 'center',
    justifyContent: 'center' ,
    flexDirection : 'row' ,
    width : "100%" ,
    paddingHorizontal : 18 ,
  },
  statsView : {
    flex : 1 ,
    alignItems : "center" ,
    padding : 5 ,
    borderRightColor : 'white' ,
    borderRightWidth : StyleSheet.hairlineWidth
  },
  statsTotal : {
    fontWeight : '800' ,
    color : 'white' ,
    fontSize : 14,
    textAlign : "center"
  },
  statsTitle : {
    color : 'white' ,
    fontSize : 12
  },
  followButtonWrap : {
    flex : 1 ,
    paddingHorizontal : 12
  },
  button : {
    backgroundColor : "#f2b203" ,
    borderRadius : 16 ,
    padding : 6
  }
});
