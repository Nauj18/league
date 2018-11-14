import React from 'react';
import { StyleSheet, Text, Image,ImageBackground, Button, TouchableOpacity  } from 'react-native';


class main extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
      };

      render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={require('../assets/background.jpg')} 
        style={{flex: 1,
            width: undefined,
            height: undefined
            }}>
            <Image source={require('../assets/Banner.png')} style = {{ height: undefined, width: undefined, resizeMode: 'contain', alignSelf:'stretch',paddingBottom: 200}}/>
            <TouchableOpacity  style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('Summoners')}
            title="Summoner Search"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            
            >
            <Text>
            Summoner Search
                </Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('Champions')}
            title="Champion Library"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            
            ><Text>
            Champion Library
            </Text></TouchableOpacity>
            <TouchableOpacity  style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('Items')}
            title="Item Library"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            
            ><Text>
            Item Library
            </Text></TouchableOpacity>
            <TouchableOpacity  style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('Patch')}
            title="Patch Notes"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            ><Text>
            Patch Notes
            </Text></TouchableOpacity>

        </ImageBackground>
        )


        }
}

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 20,
    marginTop: 10,
    backgroundColor: 'gold',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width:250
  },
});

export default main;