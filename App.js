// Reference UI Link: https://dribbble.com/shots/16316303-Login-and-Sign-up-Screens

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Input, Icon } from '@rneui/themed';

export default function App(){
  return(
    <View style={parent.box}>
      <Image source={require('./assets/login.png')} style={parent.img}/>
      <View style={parent.textBox}>
        <Text style={{ fontWeight: 'bold', fontSize: 30, marginLeft: 10 }}>Login</Text>
        <Input
          placeholder='Email'
          leftIcon={{ type: 'material', name: 'email' }}
        />
        <Input
          placeholder='Password'
          leftIcon={{ type: 'material', name: 'lock' }}
          secureTextEntry={true}
        />
        <TouchableOpacity style={parent.btn}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

let parent = StyleSheet.create({
  box: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  img: {
    width: '100%',
    height: '30%'
  },
  textBox: {
    width: '100%',
    height: '35%',
    justifyContent: 'space-around'
  },
  btn: {
    backgroundColor: '#0065ff',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10
  }
})
