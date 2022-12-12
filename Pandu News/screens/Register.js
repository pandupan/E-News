import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react'
import { Button, StyleSheet, Text, View, Image} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../context/firebase'


export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigation = useNavigation();

    const submit = async (event) =>{
        event.preventDefault();
        setError("");
        if(email.length >= 10 && password.length >= 8 && !error){
            await createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                navigation.navigate("Login");
                console.log(userCredential);
            })
            .catch(err => {
                setError("Terjadi kesalahan di server.")
            })
        } else setError("Silahkan masukan input dengan valid.");
    }

    return (
        <View style={styles.container}>
            <Image
            style={{width:220,height:120, marginTop:-50, marginBottom:100}}
            source={require('../assets/brand.png')}
            />
            <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 30, marginTop:-50}}>Register</Text>
            <TextInput 
                style={styles.input}
                placeholder="Masukan Email"
                value={email}
                onChangeText={(value)=>setEmail(value)}

            />
            <TextInput 
                style={styles.input}
                placeholder="Masukan Password"
                value={password}
                onChangeText={(value)=>setPassword(value)}
            />
            {error && (
                <Text style={{ fontSize: 16, color: 'red'}}>{error}</Text>
            )}
            <View style={{margin: 20}}>
            <Button onPress={submit} title="              Register              "/>
            </View>

            <Button onPress={()=>navigation.navigate('Login')} title="Back To Login Screen"/>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    input:{
        borderWidth:1,
        borderColor:'black',
        paddingHorizontal:10,
        paddingVertical: 10,
        width: 300,
        marginBottom: 10,
        borderRadius: 6,
        marginTop: 10
    }
})
