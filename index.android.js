// Import some code we need
import Moment from 'moment';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet    
} from 'react-native';

import DayItem from './src/day-item';


// Create the react component on the screen
export default class Weekdays extends Component {
    days() {
        var dayItems = [];
        
        for(var i = 0; i < 7; i++) {
            // Get today add i days format => Sunday, Monday...
            var day = Moment().add(i, 'days').format('dddd');
            
            dayItems.push(
                <DayItem key={i} day={day} daysUntil={i} />
            );
        }
        
        return dayItems;
    }
    
    render() {
        return (
            <View style={styles.container}>
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
