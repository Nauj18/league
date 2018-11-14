import React from 'react';
import {View, StyleSheet, Text, Image,ImageBackground, Button, TouchableOpacity  } from 'react-native';

import {
  createBottomTabNavigator
} from 'react-navigation';

import Menu from './screens/main';
import Champs from './screens/champ';
import Summoner from './screens/summoner';
import Items from './screens/item';
import Patch from './screens/patch';

export default class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      Main: Menu,
      Summoners: Summoner,
      Champions: Champs,
      Items: Items,
      Patch: Patch
    },{
        navigationOptions:{
          tabBarVisible: false
        },
        lazy:true
      });
    return (
        <View style={styles.container}>
          <MainNavigator />
        </View>
    );
  }
}



const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  // DELETE alignItems
  justifyContent: 'center',
},
});
