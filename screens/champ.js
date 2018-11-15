import React from 'react';
import { StyleSheet, Text, Image,ImageBackground, Button, TouchableOpacity  } from 'react-native';

class champ extends React.Component {
    static navigationOptions = {
        title: 'Champion List',
      };

    render() {
        const { navigate } = this.props.navigation;

        return(
            <ImageBackground source={require('../assets/background.jpg')}
        style={{flex: 1,
            width: undefined,
            height: undefined
            }}>
            <Text style={styles.textStyle}>Champion</Text>
            <Text style={styles.textStyle}>Champion</Text>
            <Text style={styles.textStyle}>Champion</Text>
            <Text style={styles.textStyle}>Champion</Text>
            <Text style={styles.textStyle}>Champion</Text>
            <Text style={styles.textStyle}>Champion</Text>
            <Text style={styles.textStyle}>Champion</Text>
            <Text style={styles.textStyle}>Champion</Text>
        </ImageBackground>
        )

    }
}

const styles = StyleSheet.create({
    textStyle: {
      color: 'white',
      alignSelf: 'center'
    },
  });
export default champ;