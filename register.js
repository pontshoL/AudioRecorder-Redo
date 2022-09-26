import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { TextInput } from "react-native-web";
import {addDoc, collection} from 'firebase/firestore'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from './firebase/config'
import {db} from './firebase/config'
import logo from './assets/logo.png'




function Register ({navigation}){
    const [name, setName] = useState('');
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   
    const  Register = () => {
        createUserWithEmailAndPassword(auth, email, password).then(() => {
            const collectionRef = collection(db,"users")
            const user = {
                name: name,
                surname:surname,
            };
            alert('Signed up successfully')
            navigation.navigate('Record')
            addDoc(collectionRef,user)   
        }).catch((error) => {
             console.log(error)
            
        })
    }
    return(
        <View style={styles.main}>
        <View style={{width:100, height:100, backgroundColor: '#956b81', alignSelf: 'center',marginTop:110, borderRadius: '50%'}}>
        <Image source={logo} style={{width: 80, height: 80, alignSelf: 'center', marginTop: 20, borderRadius: '50%'}}/>
        </View>
        <Text style={{color: '#956b81', alignSelf: 'center', marginTop:10, fontSize: 20}}>Sign Up</Text>
        <View style={styles.email}>
        <TextInput style={styles.mail} onChangeText={setName} value={name} placeholder={'Name'}></TextInput>
        </View>
        <View style={styles.email}>
        <TextInput style={styles.mail} onChangeText={setSurname} value={surname} placeholder={'Surname'}></TextInput>
        </View>
        <View style={styles.email}>
        <TextInput style={styles.mail} onChangeText={setEmail} value={email} placeholder={'Email'}></TextInput>
        </View> 
        <View style={styles.email}>
        <TextInput secureTextEntry={true} style={styles.mail} onChangeText={setPassword}  value={password} placeholder={'Password'}></TextInput>
        </View>
        
        <View style={styles.log}>
            <Pressable onPress={Register}>
            <Text style={styles.login}>
                Sign Up
            </Text>
            </Pressable>
            <Pressable  onPress={() => navigation.navigate('Home')}>
              <Text style={{color: '#956b81', marginTop: 20}}>Already have an Account? signIn</Text>
           </Pressable>
            
        </View>
    </View>
    )
   
}
export default Register;

const styles = StyleSheet.create({
    main: {
       backgroundColor: "black",
       height: '100%'
    },
    email: {
        
        border: "2px solid black",
        width: 300,
        height:60,
        alignSelf: "center",
        marginTop:15,
        borderRadius: 20,
        top: '10%'
    },
    log:{
        backgroundColor: "#956b81",
        border: "2px solid black",
        width: 220,
        height:50,
        alignSelf: "center",
        marginTop:12,
        borderRadius: 20,
        top: '13%'
    },
    mail: {
        backgroundColor: "#956b81",
        color: "white",
        marginLeft: 10,
        marginTop: 10,
        width: 300,
        height: 60,
        borderRadius: 12,
    },
    login:{
        color: "white",
        marginLeft: 15,
        marginTop: 10,
        alignSelf: "center",
      
    }
    
})