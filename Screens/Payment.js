import React, { useState, useRef } from "react";
import { Paystack, paystackProps } from "react-native-paystack-webview";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { Button, Input } from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from "react-native-paper";
import { AdvanceLB } from "../component/AdvanceLB";
import { BottomNavBar } from "../component/BottomNavBar";

export default function Payment({ navigation }) {
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);
  const [name, setName] = useState('')
  const [phno, setPhNo] = useState('')
  const [email, setEmail] = useState('')

  return (

    <View style={{ flex: 1, backgroundColor: '#dcdcdc' }}>
      <AdvanceLB/>

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
      <BottomNavBar/>
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