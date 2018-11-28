import React from 'react';
import { StyleSheet,Platform, Text, Image,ImageBackground, Header, TouchableOpacity  } from 'react-native';
import api from '../utill/api'


//api expires after a day so make sure to change it!!

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

    constructor(props){
        super(props);
        this.state = {
            summoner:[]
        }
    }

    componentWillMount(){
        api.getSummoner('Casual Clock').then((res)=>{
            this.setState({
               summoner: res 
            })
        });
    }
    

    render() {
        console.log("Summoner: ",this.state)
        return(
            <ImageBackground source={require('../assets/background.jpg')}
        style={{flex: 1,
            width: undefined,
            height: undefined
            }}>
            <Text style={styles.textStyle}>Summoner: {this.state.summoner.name}</Text>
            <Text style={styles.textStyle}>Level: {this.state.summoner.summonerLevel}</Text>
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
export default summoner;