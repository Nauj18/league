import React from 'react';
import { StyleSheet, Text, View,ImageBackground, Button, TouchableOpacity  } from 'react-native';
import api from '../utill/api'

class summonerInfo extends React.Component {
    static navigationOptions = {
        title: 'SummonerInfo',
      };

    constructor(props){
        super(props);
        this.state = {
            summoner:[]
        }
    }

    componentWillMount(){
        api.getSummoner(this.props.navigation.state.params.text).then((res)=>{
            this.setState({
               summoner: res 
            })
        });
    }

    render() {
        const { navigate } = this.props.navigation;

        return(
            <ImageBackground source={require('../assets/background.jpg')}
        style={{flex: 1,
            width: undefined,
            height: undefined
            }}>
            {/* <View style = {{paddingTop: 250}}> */}
            <Text style={styles.textStyle}>Summoner: {this.state.summoner.name}</Text>
            <Text style={styles.textStyle}>Level: {this.state.summoner.summonerLevel}</Text>
            <Text style={styles.textStyle}>Summoner ID: {this.state.summoner.id}</Text>
            {/* </View> */}
        </ImageBackground>
        )

    }
}

const styles = StyleSheet.create({
    textStyle: {
      paddingTop: 50,
      color: 'white',
      alignSelf: 'center'
    },
  });
export default summonerInfo;