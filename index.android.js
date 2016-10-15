// Import some code we need
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet    
} from 'react-native';

import DayItem from './src/day-item';


const DAYS = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 
              'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Create the react component on the screen
export default class Weekdays extends Component {
    days() {
        return DAYS.map((day) => {
           // Call 7 times for each day
           return <DayItem day={day} />;
        });  
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Days of the weeks:
                </Text>
                {this.days()}
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
