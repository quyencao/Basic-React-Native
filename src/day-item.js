// Import 
import React, {Component} from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';

// Create component
class DayItem extends Component {
    render() {
        return <Text style={styles.day}>
            A day of the week        
        </Text>
    }
}

// Style component
const styles = StyleSheet.create({
   day: {
       fontSize: 18,
       color: '#0000FF'
   } 
});

// Make this code available elsewhere
export default DayItem;