import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
// import Greeting from './src/Greeting';
// import Blink from './src/Blink';
// import Style from './src/Style';
// import Flex from './src/Flex';
// import Layout from './src/Layout';
import TextInput from './src/TextInput';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <TextInput />
      // <View style={styles.container}>
      //   <Text>Test!</Text>
      //   <Image source={pic} style={{ width: 193, height: 110 }} />
      //   <Blink />
      //   <Greeting />
      //   <Style />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});







