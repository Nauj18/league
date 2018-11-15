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
            
            <Text style={styles.textStyle}>Patch</Text>
            <Text style={styles.textStyle}>Patch</Text>
            <Text style={styles.textStyle}>Patch</Text>
            <Text style={styles.textStyle}>Patch</Text>
            <Text style={styles.textStyle}>Patch</Text>
            <Text style={styles.textStyle}>Patch</Text>
            <Text style={styles.textStyle}>Patch</Text>
            <Text style={styles.textStyle}>Patch</Text>
            <Text style={styles.textStyle}>Patch</Text>
            <Text style={styles.textStyle}>Patch</Text>
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
export default patch;