import React, { useState, useRef } from "react";
import { Paystack, paystackProps } from "react-native-paystack-webview";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { Button, Input } from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from "react-native-paper";

export default function Payment({ navigation }) {
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);
  const [name, setName] = useState('')
  const [phno, setPhNo] = useState('')
  const [email, setEmail] = useState('')

  return (

    <View style={{ flex: 1, backgroundColor: '#dcdcdc' }}>
      <View style={{ flex: 0.10, backgroundColor: 'black', width: "100%", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
        <Image source={require('../assets/Logo.png')}
          style={{ height: '70%', width: '15%', resizeMode: 'contain' }}
        />
        <Text style={{ fontSize: 24, color: 'white' }}>Baby Cure</Text></View>
      <View style={{ flex: 0.01, backgroundColor: '#daa520', height: '100%', width: '100%' }}></View>
      <View style={{ flex: 0.01, backgroundColor: 'black', height: '100%', width: '100%' }}></View>
      <View style={{ flex: 0.01, backgroundColor: '#daa520', height: '100%', width: '100%' }}></View>
      <View style={{ flex: 0.01, backgroundColor: 'black', height: '100%', width: '100%' }}></View>

      <View style={{ flex: 0.75, marginHorizontal: 15, }}>
        <Paystack
          paystackKey="pk_test_a8e9b74f39a53df75d6d55621c0478cefe3496e2"
          paystackSecretKey="sk_test_ac822e21e6a56cc7be74dd5e5437bb64eab54105"
          billingEmail={email}
          amount={2500}
          billingName={name}
          billingMobile={phno}
          currency='GHS'
          onCancel={(e) => {
            console.log(e);
          }}
          onSuccess={(res) => {
            console.log(res);
            setName('')
            setPhNo('')
            setEmail('')
            navigation.replace('Chat')
          }}
          ref={paystackWebViewRef}
        />
        <View style={{ marginTop: 10, alignItems: 'center' }}>
          <Text style={{ color: '#daa520', fontSize: 40, fontWeight: 'bold' }}>PAYMENT</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Input placeholder="enter Email" label="Email" leftIcon={{ type: "material", name: "email" }} value={email}
            onChangeText={text => setEmail(text)} />
          <Input placeholder="enter name" label="Name" leftIcon={{ type: "material", name: "badge" }} value={name}
            onChangeText={text => setName(text)} />
          <Input placeholder="enter Phone Number" label="Phone No" keyboardType="numeric" leftIcon={{ type: "material", name: "phone" }} value={phno}
            onChangeText={text => setPhNo(text)} />
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => {paystackWebViewRef.current.startTransaction()}}
            style={styles.paystack}
          >
            <Text style={styles.pay}>Pay Now</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View style={{ flex: 0.01, backgroundColor: 'black', height: '100%', width: '100%', marginTop: '2%' }}></View>
      <View style={{
        flex: 0.10, width: '100%', backgroundColor: '#daa520', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
      }}>

        <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => navigation.navigate('homeScreen')}>
          <FontAwesomeIcon name="home" size={30} style={{ padding: 10, marginLeft: 39, marginRight: 39 }} ></FontAwesomeIcon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddBaby')}>
          <FontAwesomeIcon name="plus" size={30} style={{ padding: 10, marginLeft: 40, marginRight: 40 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PhysicalActivities')}>
          <FontAwesomeIcon name="clipboard" size={30} style={{ padding: 10, marginLeft: 40, marginRight: 40 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('More')}>
          <MaterialIcons name="more" size={30} style={{ padding: 10, marginLeft: 39, marginRight: 39 }} />
        </TouchableOpacity>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  paystack: {

    width: "40%",
    backgroundColor: "black",
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  pay: {
    color: "white",
    fontSize: 16
  },
});