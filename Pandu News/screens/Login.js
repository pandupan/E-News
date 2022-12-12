import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState, useEffect } from "react";
import { Image, StyleSheet, Text, View, TextInput, Button, BackHandler } from "react-native";
import { auth } from '../context/firebase'
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then ((userCredential)=> {
        //Signed im
        const user = userCredential.user;
        navigation.navigate("News");
        console.log(user);
      })
      .catch ((error) => {
        const errorCode = error.code;
        const errorMessage = error.errormessage;
        console.log(errorCode, errorMessage)
      })
    }

  return (
    <View style={styles.container}>
      <Image
      style={{width:220,height:120, marginTop:-50, marginBottom:100}}
      source={require('../assets/brand.png')}
      />
      <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 30, marginTop:-50 }}>Login</Text>
      <View>
        <TextInput
          style={{
            borderWidth: 1,
            paddingVertical: 10,
            borderRadius: 5,
            width: 300,
            marginBottom: 10,
            paddingHorizontal: 10,
          }}
          placeholder="Masukan Username"
          value={email}
          onChangeText={(value)=>setEmail(value)}
        />
        <TextInput
          style={{
            borderWidth: 1,
            paddingVertical: 10,
            borderRadius: 5,
            width: 300,
            marginBottom: 30,
            paddingHorizontal: 10,
          }}
          placeholder="Masukan Password"
          value={password}
          onChangeText={(value)=>setPassword(value)}
        />
        <Button title="Login" style={{marginBottom:30}} onPress={onLogin}/>
            <Text style={{textAlign:'center', marginVertical:15, fontWeight:'bold'}}>Are u haven't register?</Text>
        <Button title="Register" onPress={()=>navigation.navigate('Register')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
