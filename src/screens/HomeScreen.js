import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Linking,
  Pressable,
} from 'react-native';


function HomeScreen({navigation}) {
   const go = () => {
     navigation.navigate('Login');
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize:20,marginTop:20 } }>Home Screen</Text>
      <Pressable onPress={go}>
        <Text style={{fontSize:20,marginTop:20 } }>GO TO LOGIN PAGE</Text>
      </Pressable>
    </View>
  );
}

export default HomeScreen;
