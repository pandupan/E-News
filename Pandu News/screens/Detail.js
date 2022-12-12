import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';




export default function DetailScreen({route}) {
    const navigation = useNavigation()
    const {width,height} = Dimensions.get('window')
    return (
        <View>
            <Image style={{width:width, height:width}}source={{uri:route.params.data.urlToImage}} />
            <View style={{padding: 10}}>
            <Text style={{fontSize:21, fontWeight:'bold', margin: 5}}>{route.params.data.title}</Text>
            <Text style={{fontSize:15, fontWeight:'600', marginLeft:5, marginBottom:3}}>{route.params.data.publishedAt}</Text>
            <Text style={{fontSize:15, fontWeight:'600', marginLeft:5}}>{route.params.data.author}</Text>
            <Text style={{fontSize:15, marginHorizontal:5, marginVertical:20, textAlign:'justify'}}>{'\t'}{'\t'}{route.params.data.content}</Text>
            </View>
        </View>
    )
}