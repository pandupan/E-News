import React from 'react';
import Lottie from 'lottie-react-native';
import {Text,View} from 'react-native'
import { useNavigation } from '@react-navigation/native';


export default function Splash() {
  const navigation=useNavigation()
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Lottie source={require('../assets/Splash1.json')} 
      autoPlay 
      loop={false}
      speed={0.7}
      autoSize
      onAnimationFinish={()=>navigation.navigate('Login')}
      />
    </View>
  );
}