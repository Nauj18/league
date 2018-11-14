import React from 'react';
import { StyleSheet, Text, Image,ImageBackground, Button, TouchableOpacity  } from 'react-native';

class item extends React.Component {
    static navigationOptions = {
        title: 'Item List',
      };

    render() {
        const { navigate } = this.props.navigation;

        return(
            <ImageBackground source={require('../assets/background.jpg')}
        style={{flex: 1,
            width: undefined,
            height: undefined
            }}>
            <Text>ITems</Text>
            <Text>ITems</Text>
            <Text>ITems</Text>
            <Text>ITems</Text>
            <Text>ITems</Text>
            <Text>ITems</Text>
        </ImageBackground>
        )

    }
}
export default item;