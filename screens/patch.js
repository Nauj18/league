import React from 'react';
import { StyleSheet, Text, Image,ImageBackground, Button, TouchableOpacity  } from 'react-native';

class patch extends React.Component {
    static navigationOptions = {
        title: 'Patch Notes',
      };

    render() {
        const { navigate } = this.props.navigation;

        return(
            <ImageBackground source={require('../assets/background.jpg')}
        style={{flex: 1,
            width: undefined,
            height: undefined
            }}>
            <Text>patch</Text>
            <Text>patch</Text>
            <Text>patch</Text>
            <Text>patch</Text>
            <Text>patch</Text>
        </ImageBackground>
        )
    }
}
export default patch;