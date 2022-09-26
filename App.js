import React,{useEffect, useState} from "react";
import {Pressable, StyleSheet, Text, View, Image, TextInput} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase/config.js'
import logo from './assets/logo.png'
import Record from "./record";
import Register from "./register.js";




const Stack = createNativeStackNavigator();

const Home = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
      signInWithEmailAndPassword(auth, email, password).then(() => {
          alert('Signed in successfully')
          navigation.navigate('Record')
      }).catch((error) => {
           console.log(error)
          
      })
  }
  console.log(password)
  return(
    <View style={styles.main}>
    <View style={{width:100, height:100, backgroundColor: '#956b81', alignSelf: 'center',marginTop:110, borderRadius: '50%'}}>
        <Image source={logo} style={{width: 80, height: 80, alignSelf: 'center', marginTop: 20, borderRadius: '50%'}}/>
    </View>
    <Text style={{color: '#956b81', alignSelf: 'center', marginTop:10, fontSize: 20}}>Sign In</Text>
    <View style={styles.email}>
        <TextInput style={styles.mail} onChangeText={setEmail} value={email} placeholder={'Email'}>
           
        </TextInput>

    </View>
    <View style={styles.password}>
        <TextInput secureTextEntry={true} style={styles.mail} onChangeText={setPassword} value={password} placeholder={'Password'}>
        </TextInput>
    </View>
    <View style={styles.log}>
        <Pressable onPress={login}>
        <Text style={styles.login}>
            Log In
        </Text>
        </Pressable>
        <Pressable  onPress={() => navigation.navigate('Register')}>
          <Text style={{color: '#956b81', marginTop: 20}}>Dont have an Account? signUp</Text>
        </Pressable>
        
    </View>
   
</View>     
  )
}
export default function App(){
   return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
          <Stack.Screen name='Record' component={Record}/>
          <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
   )
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: "black",
    height: '100%'
 },
 
 password: {
     border: "2px solid black",
     width: 300,
     height:60,
     alignSelf: "center",
     marginTop:6,
     borderRadius: 11,
     top: '15%'
 },
 email: {
     border: "2px solid black",
     width: 300,
     height:60,
     alignSelf: "center",
     marginTop:15,
     borderRadius: 11,
     top: '15%',
     
 },
 log:{
     backgroundColor: "#956b81",
     border: "2px solid black",
     width: 200,
     height:50,
     alignSelf: "center",
     marginTop:30,
     borderRadius: 11,
     top: '15%'
 },
 mail: {
     color: "white",
     marginLeft: 15,
     marginTop: 10,
     width: 250,
     height: 50,
     backgroundColor: "#956b81",
     borderRadius: 12,
 },
 login:{
     color: "white",
     marginLeft: 15,
     marginTop: 10,
     alignSelf: "center"
 }
 
});


