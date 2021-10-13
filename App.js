import React from "react";
import { ActivityIndicator , StyleSheet ,View} from "react-native";
import { Asset } from 'expo-asset';
import OnBoarding from "./src/OnBoarding";
function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}


export default function App() {

  const [appIsReady, setAppIsReady] = React.useState(false);

  const loadAssetsAsync = async  () => {
    const imageAssets = cacheImages([
      require('./assets/bg1.jpeg'), require('./assets/bg2.jpg')
    ]);
    await Promise.all([...imageAssets]);
  }

  React.useEffect(()=>{
    (async () => {
      try {
        await loadAssetsAsync();
        // Artificially delay for two seconds to simulate a slow loading
        await new Promise(resolve => setTimeout(resolve, 200));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    })()

  } ,[])




  return (
      <>
        {appIsReady ? <OnBoarding/> : <View style={{...StyleSheet.absoluteFill  , alignItems : 'center' , justifyContent:'center'}}>
          <ActivityIndicator/>
          </View>
        }
      </>

  );
}
