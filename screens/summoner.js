import React from 'react';
import { StyleSheet,Platform, Text, Image,ImageBackground, Header, TouchableOpacity  } from 'react-native';

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

    render() {
        
        return(
            <ImageBackground source={require('../assets/background.jpg')}
        style={{flex: 1,
            width: undefined,
            height: undefined
            }}>
            <Text>Summoner</Text>
            <Text>Summoner</Text>
            <Text>Summoner</Text>
            <Text>Summoner</Text>
            <Text>Summoner</Text>
            <Text>Summoner</Text>
            <Text>Summoner</Text>
        </ImageBackground>
        )


    }
}
export default summoner;