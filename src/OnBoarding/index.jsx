import React, { useRef  , useState} from "react";
import {
  Animated,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import Indicator from "./Indicator";

import Reveal from "./reveal";
import TopContent from "./topContent";
import SlideItem from "./slideItem"
import BackDrop from "./backdrop"
import Slides from "./data"
const { width, height } = Dimensions.get("screen");

const OnBoarding = () => {

  const ListRef = useRef(null);
  const [currentIndex , setCurrentIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold : 50
  }).current

  const scrollTo =() => {
    if(currentIndex < Slides.length - 1) {
      ListRef.current.scrollToIndex({index : currentIndex + 1})
    }
  }

  return (
    <Reveal>
      <View style={styles.container}>
        <BackDrop/>
        <TopContent />
        <View style={styles.squareBg}/>
        <View style={styles.slideListContainer}>
          <Animated.FlatList
            ref={ListRef}
            data={Slides}
            renderItem={({ item }) => <SlideItem slide={item} />}
            horizontal
            scrollEventThrottle={32}
            onScroll = {Animated.event([{nativeEvent :{contentOffset : {x : scrollX}}}],{useNativeDriver : false})}
            onViewableItemsChanged={viewableItemChanged}
            viewabilityConfig = {viewConfig}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
          />
          <TouchableOpacity onPress={()=> scrollTo()} style={styles.button} activeOpacity={0.6}>
            <AntDesign name="arrowright" size={32} color="#fff"/>
          </TouchableOpacity>
          <Indicator data={Slides} scrollX={scrollX}/>
        </View>
      </View>
    </Reveal>
  );
};

export default OnBoarding;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideListContainer : {
    height: height * 0.5,
    paddingTop : height * 0.06 ,
    alignItems : 'center' ,
    marginTop : 'auto'
   } ,
  squareBg: {
    position: "absolute",
    width: width * 1.28,
    height: height,
    transform: [{ rotate: "-12deg" }],
    top: height * 0.5,
    left: -width * 0.1,
    borderRadius: 36,
    backgroundColor: "#1a202c",
  },
  button : {
    backgroundColor : "#f2b203" ,
    borderRadius : 100 ,
    padding : 20 ,
  }
});
