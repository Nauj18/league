import React from 'react';
import { StyleSheet,Platform, Text, TextInput, Image,ImageBackground, Header, TouchableOpacity  } from 'react-native';

class summoner extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: "Summoner",
        headerRight: (
            <TouchableOpacity
                title="Main"
                onPress={() => {
                    navigation.navigate("Main");
                }}
                backgroundColor="rgba(0,0,0,0)"
                color="rgba(0,122,255,1)"
            />
        ),
        style: {
            marginTop: Platform.OS=== 'android' ? 24 : 0
        }
    });

    state = {text:""}
    

    render() {
        console.log("Summoner: ",this.state)
        return(
            <ImageBackground source={require('../assets/background.jpg')}
        style={{flex: 1,
            width: undefined,
            height: undefined
            }}>
            <Text style = {styles.textStyle}>Input Summoner Name</Text>
            <TextInput 
            style = {{top: 100, height: 40, width: 100, color: 'white',alignSelf: 'center'}}
            onChangeText={text => this.setState({text})}>
            </TextInput>
            <TouchableOpacity
            style={styles.buttonStyle}
            title = "Search"
            color="#841584"
            onPress={() => this.props.navigation.navigate('SummonerInfo',  { text: this.state.text} )}>
            <Text>Search Summoner</Text>
            </TouchableOpacity>          
        </ImageBackground>
        )

    }
}

const styles = StyleSheet.create({
    textStyle: {
      paddingTop: 100,
      color: 'white',
      alignSelf: 'center',
    },
    buttonStyle: {
        padding: 20,
        top: 150,
        backgroundColor: 'gold',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        width:250
      },
  });
export default summoner;