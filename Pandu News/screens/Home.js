import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { FlatList } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";


export default function Home() {
  const navigation = useNavigation()
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "us",
          category: "business",
          apiKey: "83fb9fbe8b354b05ad03f76729695377",
        },
        //header
      });
      setData(res.data.articles);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {console.log(data)}
      <SafeAreaView>
        <ScrollView>
          {data &&
            data.map((item, i) => {
              return (
                <>
                <TouchableOpacity
                  style={{flex:1}}
                  onPress={()=> navigation.navigate('Articles',{data:item})}>
                    <View style={{flexDirection:'row',marginVertical:10,marginHorizontal:5}}>
                        <Image style={{width:100,height:100}}source={{uri:item.urlToImage}} />
                            <View style={{justifyContent:'space-between', width:250, height:100}}>
                                <Text style={{fontWeight:'bold',paddingHorizontal:10}}>
                                    {item.title}</Text>
                                <Text style={{marginLeft:10}}>{item.author}</Text>
                            </View>
                    </View>
                </TouchableOpacity>
                </>
              )
            })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
