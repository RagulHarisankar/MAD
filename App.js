import { View, Text, StyleSheet, Image } from 'react-native'; 

export default function App(){
  return(
    <View style={parent.box}>
      <Image source={require('./assets/login.png')} style={parent.img}/>
      <View style={parent.textBox}>
        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Login</Text>
      </View>
    </View>
  )
}

let parent = StyleSheet.create({
  box: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  img: {
    width: '70%',
    height: '30%'
  },
  textBox: {
    width: '100%',
  }
})
