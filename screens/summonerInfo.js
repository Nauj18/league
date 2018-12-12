import React from 'react';
import { StyleSheet, Text, View,ImageBackground, Button, TouchableOpacity,Image  } from 'react-native';
import api from '../utill/api'

const id = ""

class summonerInfo extends React.Component {
    static navigationOptions = {
        title: 'SummonerInfo',
      };

    constructor(props){
        super(props);
        this.state = {
            sum:[],

        }
    }

    componentWillMount(){
        api.getRankInfo(this.state.sum.id).then((res)=>{
            console.log(res)
            this.setState({
                sum:res
 
            })
        })
        api.getSummoner(this.props.navigation.state.params.text).then((res)=>{
            console.log(res)
            this.setState({
                sum: res 
            })
        })
        //console.log(this.state.sum.id)
        //var id =this.state.sum.id
        //console.log("This is the id: "+id)
        
        
    }


    render() {
        const { navigate } = this.props.navigation;

        console.log(this.state)
        //console.log("current rankInfo wins : "+this.state.rankInformation.wins)
        var icon = this.state.sum.profileIconId
        return(
            <ImageBackground source={require('../assets/background.jpg')}
        style={{flex: 1,
            width: undefined,
            height: undefined
            }}>
            {/* <View style = {{paddingTop: 250}}> */}
            <Image style = {styles.iconStyle}
            source={{uri: 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/'+icon+'.png'}}></Image>
            <Text style={styles.textStyle}>Summoner: {this.state.sum.name}</Text>
            <Text style={styles.textStyle}>Level: {this.state.sum.summonerLevel}</Text>

            {<Text style={styles.textStyle}>Rank Level: {this.state.sum.tier}</Text>}
            <Image style = {styles.iconStyle} source={require('../assets/base-icons/gold.png')}></Image>
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
    iconStyle:{
        width: 150,
        height: 150,
        alignSelf: 'center'
    }
  });
export default summonerInfo;