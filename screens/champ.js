import React from 'react';
import { StyleSheet, Text, Image,ImageBackground, Button, TouchableOpacity, FlatList  } from 'react-native';


class champ extends React.Component {
    static navigationOptions = {
        title: 'Champion List',
      };

    render() {
        const { navigate } = this.props.navigation;
        var champions = require('./champs.json');
        return(
            <ImageBackground source={require('../assets/background.jpg')}
            style={{flex: 1,
                width: undefined,
                height: undefined
                }}>
                 <FlatList 
                 numColumns={4}
                data={champions}
                renderItem={({item}) => <Image style={styles.iconStyle} source={{uri:item.icon}} /> }
            />
                
    
            </ImageBackground>
        )

    }
}
const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    iconStyle:{
      width: 100,
      height: 100,
  },
  list: {
      flexDirection: "row",
      flexWrap: "wrap"
  }
  })
export default champ;