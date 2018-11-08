import React from 'react';
import { StyleSheet, Text, Image,ImageBackground } from 'react-native';

export default class App extends React.Component {

  
  render() {
    return (
      <ImageBackground source={require('./assets/background.jpg')} 
      style={{flex: 1,
        width: '100%',
        height: '100%'
        }}>
        <Image source={require('./assets/Banner.png')} />;
        <Text style={styles}>Inside</Text>
      </ImageBackground>
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
