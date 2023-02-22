import React, { useState } from "react";
import {View, Text, StyleSheet,Alert, TouchableOpacity} from "react-native";
import {Button, Input} from "react-native-elements";
import { auth } from "../firebase";
//import { auth } from ".../firebase";
import { getAuth, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";

const RegisterScreen = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [imageURL, setImageURL] = useState('');

    const  register=()=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
            var user =  userCredential.user;
            const auth = getAuth();
            updateProfile(auth.user, {
              displayName: name,
              photoURL: imageURL? imageURL: "https://www.trackergps.com/canvas/images/icons/avatar.jpg"
            }).then(() => {
              // Profile updated!
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
            });
            navigation.popToTop();
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
          // ..
        });
      
      } 
    
    return (
        <View style = {styles.container}>
           <Input placeholder="enter email" label="email" leftIcon={{type:"material", name:"email"}} value={email} 
           onChangeText={text=> setEmail(text)}/>
           <Input placeholder="enter name" label="Name" leftIcon={{type:"material", name:"badge"}} value={name} 
           onChangeText={text=> setName(text)}/>
           <Input placeholder="enter Password" label="Password" leftIcon={{type:"material", name:"lock"}} value={password} 
           onChangeText={text=> setPassword(text)} secureTextEntry/>
           <Input placeholder="confirm Password" label="Confirm Password" leftIcon={{type:"material", name:"lock"}} value={password} 
           onChangeText={text=> setPassword(text)} secureTextEntry/>
         {/*   <Input placeholder="Enter Your Image URL" label="Profile Picture" 
           leftIcon={{type:"material", name:"face"}} value={imageURL} 
           onChangeText={text=> setImageURL(text)}/> */}

           <View style={{flexDirection:'row'}}>
            <Text style={{fontWeight:'800'}}>Already a Member?  </Text>
           <TouchableOpacity style={{color:'red',fontWeight:'800'}} onPress={()=>navigation.navigate('LoginScreen')}>Login</TouchableOpacity>
           </View>

           <Button title = 'Register' style = {styles.button} onPress={register}/>
        </View>
    )
}

export default RegisterScreen;
const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,

    },
    container:{
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
})