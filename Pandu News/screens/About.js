import React, { useContext, useEffect } from 'react'
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Linking from 'expo-linking';
import { auth } from '../context/firebase'
import { useNavigation } from "@react-navigation/native";
import { signOut } from 'firebase/auth';


const About = () => {

    const navigation = useNavigation()

    const handleLogout = ()=> {
        signOut(auth).then(()=>{
            // Berhasil
            navigation.navigate('Login')
            console.log('Berhasil Logout')
        }). catch ((error)=> {
           // Gagal 
        })
    }


    const handleOpenWithLinkingInstragram = () =>{
        Linking.openURL("https://www.instagram.com/pandupan__/?hl=id");}
    const handleOpenWithLinkingFacebook = () =>{
        Linking.openURL("https://www.facebook.com/pandu.pangestu.790");}
    const handleOpenWithLinkingGithub = () =>{
        Linking.openURL("https://github.com/pandupan");}
    const handleOpenWithLinkingTwitter = () =>{
        Linking.openURL("https://twitter.com/urcompiler_");}
    const handleOpenWithLinkingLinkedIn = () =>{
        Linking.openURL("https://www.linkedin.com/in/pandu-pangestu-448b02202/");
    }
  return (
        <View style={{flex: 1}}>
            <Button title="signOut" style={{marginBottom:30}} onPress={handleLogout}/>
        <StatusBar barStyle={'light-content'} backgroundColor="#212121" />
        <ImageBackground
            source={{
            uri: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            }}
            style={{flex: 0.5}}
            resizeMode={'cover'}>
            <View style={{flex: 0.5}}></View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
                source={
                require('../assets/profilepandu.jpeg')
                }
                style={{
                width: 100,
                height: 100,
                borderRadius: 100 / 2,
                borderWidth: 3,
                borderColor: '#FFFFFF',
                position: 'absolute',
                zIndex: 2,
                }}
            />
            </View>
            <View style={{marginTop: 60}}>
            <Text
                style={{
                fontWeight: 'bold',
                fontSize: 18,
                textAlign: 'center',
                color: '#212121',
                }}>
                Pandu Panngestu
            </Text>
            <Text style={{textAlign: 'center'}}>
            "I don't pray for miracles, I make them."
            </Text>
            <View style={{marginLeft: 80}}>
                <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                }}>
                <View
                    style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 40,
                    height: 40,
                    }}>
                    <Icon name="mobile-alt" size={25} color="#212121" />
                </View>
                <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
                    <Text style={{fontWeight: 'bold'}}>085870980885</Text>
                </View>
                </View>
                <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <View
                    style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 40,
                    height: 40,
                    }}>
                    <Icon name="map-marker-alt" size={25} color="#212121" />
                </View>
                <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
                    <Text style={{fontWeight: 'bold'}}>Tasikmalaya</Text>
                </View>
                </View>
                <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <View
                    style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 40,
                    height: 40,
                    }}>
                    <Icon name="envelope" size={25} color="#212121" />
                </View>
                <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
                    <Text style={{fontWeight: 'bold'}}>
                    pangestup60@gmail.com
                    </Text>
                </View>
                </View>
            </View>
            <View
                style={{flexDirection: 'row', marginTop: 40, marginHorizontal: 30}}>
                <TouchableOpacity
                style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="facebook" size={25} color="#bdbdbd" onPress={() => handleOpenWithLinkingFacebook()} />
                </TouchableOpacity>
                <TouchableOpacity
                style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="instagram" size={25} color="#bdbdbd" onPress={() => handleOpenWithLinkingInstragram()} />
                </TouchableOpacity>
                <TouchableOpacity
                style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="github" size={25} color="#bdbdbd" onPress={() => handleOpenWithLinkingGithub()} />
                </TouchableOpacity>
                <TouchableOpacity
                style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="twitter" size={25} color="#bdbdbd" onPress={() => handleOpenWithLinkingTwitter()}/>
                </TouchableOpacity>
                <TouchableOpacity
                style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="linkedin" size={25} color="#bdbdbd" onPress={() => handleOpenWithLinkingLinkedIn()} />
                </TouchableOpacity>
            </View>
            </View>
        </View>
        </View>

  );
};

export default About;
