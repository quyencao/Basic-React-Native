// Import some code we need
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet    
} from 'react-native';


// Create the react component on the screen
export class Weekdays extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Days of the weeks:
                </Text>
            </View>
        )
    }
}

// Style the React component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // move y
        alignItems: 'center' // Move x
    }
});

// flexDirection: 'row' => justifyContent : x, alignItems: y
// flexDirection: 'column' => justifyContent : y, alignItems: x

// Show the react component on the screen
AppRegistry.registerComponent('AwesomeProject', () => Weekdays);






































//import React, { Component } from 'react';
//import {
//  AppRegistry,
//  StyleSheet,
//  Text,
//  View
//} from 'react-native';
//
//export default class AwesomeProject extends Component {
//  render() {
//    return (
//      <View style={styles.container}>
//        <Text style={styles.welcome}>
//          Welcome to React Native! 
//          This is our first app
//        </Text>
//        <Text style={styles.instructions}>
//          To get started, edit index.android.js
//        </Text>
//        <Text style={styles.instructions}>
//          Double tap R on your keyboard to reload,{'\n'}
//          Shake or press menu button for dev menu
//        </Text>
//      </View>
//    );
//  }
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#F5FCFF',
//  },
//  welcome: {
//    fontSize: 20,
//    textAlign: 'center',
//    margin: 10,
//  },
//  instructions: {
//    textAlign: 'center',
//    color: '#333333',
//    marginBottom: 5,
//  },
//});
//
//AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);


