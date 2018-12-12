import React from 'react';
import { StyleSheet, Text, Image,ImageBackground, Button, View, FlatList  } from 'react-native';


class item extends React.Component {
    static navigationOptions = {
        title: 'Item List',
      };

      render() {
        var it = require('./items.json');
        return (
            <ImageBackground source={require('../assets/background.jpg')}
            style={{flex: 1,
                width: undefined,
                height: undefined
                }}>
                 <FlatList 
                 numColumns={4}
                data={it}
                renderItem={({item}) => <Image style={styles.iconStyle} source={{uri:item.icon}} /> }
            />

        </ImageBackground>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
       flex: 1,
       paddingTop: 22
      },
      iconStyle:{
        width: 50,
        height: 100,
        justifyContent: "space-evenly",
        flex: 1
    },
    list: {
        flexDirection: "row",
        flexWrap: "wrap"
    }
    })

export default item;