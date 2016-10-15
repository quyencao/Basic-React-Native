// Import 
import React, {Component} from 'react';
import {
    Text
} from 'react-native';

// Create component
class DayItem extends Component {
    // Dynamic style
    style() {
        return {
            color: this.color(),
            fontSize: this.fontSize(),
            lineHeight: this.lineHeight(),
            fontWeight: this.fontWeight()
        }
    }
    
    // Color
    color() {
        var opacity = 1 / ( this.props.daysUntil + 1 );
        
        return `rgba(0, 0, 0, ${opacity})`;
    }
    
    // Font Weight
    fontWeight() {
        var weight = 7 - this.props.daysUntil;
        
        return `${weight * 100}`;
    }
    
    // Font Size
    fontSize() {
        return 60 - 6 * this.props.daysUntil;
    }
    
    // Line Height
    lineHeight() {
        return 70 - 4 * this.props.daysUntil;
    }
    
    render() {
        return <Text style={this.style()}>
            {this.props.day}       
        </Text>
    }
}

// Make this code available elsewhere
export default DayItem;