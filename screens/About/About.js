import React from 'react'
import {View,Text,Image,StyleSheet,Dimensions,SafeAreaView} from "react-native"
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;   
import {Button} from "react-native-paper"
export default function About({navigation}) {
    return (

        <SafeAreaView style={[style.container, { backgroundColor: "#a1ccf7" }]}>

        <View style={style.container}>
         <Image
              style={{ width: 250, height: 250, marginTop: 5 }}
              source={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/apphuyendo.appspot.com/o/logohuyendo.png?alt=media&token=ee06f5dc-ddf0-4a79-b661-0335a67eb4c2"
              }}
            />
            <Text style={{ color: "gray" }}>Tử Vi Cơ Bản</Text>
            <Text style={{ color: "gray" }}>Phiên bản ở không vì dịch Covid </Text>
            
            <Button icon="home-currency-usd">
            Ủng hộ App qua Mommo : 0933075678</Button>

            <Text 
            
            
            style={{ color: "gray" }}>Mọi thắc mắc email  : ledanghongphuc@gmail.com </Text>

            <Button 
            style={style.Reg}       
            icon="account" mode="contained" 
            onPress={() => navigation.navigate('Auth')}
            >
    BẠN CÓ THỂ ĐĂNG KÝ ĐỂ NHẬN BÀI VIẾT MỚI 
  </Button>
        </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: { flex: 1 ,    justifyContent: "center",
    alignItems: "center"},
  
    Home: {
      margin: 5,
      flex: 1
    },
    Header: {
      justifyContent: "center",
      alignItems: "center"
    },
    Content: {
      justifyContent: "center",
      alignItems: "center"
    },
    Card: {
      width: windowWidth / 1.1,
      marginTop: 5,
      padding: 2
    },
    Reg:{
      marginTop:5,
      width:400

    }
  });
  