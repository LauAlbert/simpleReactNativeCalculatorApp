import React, { Component } from 'react';
import {Text, View } from 'react-native';
import CalculatorButtons from './CalculatorButtons';
import {connect} from 'react-redux';


class Calculator extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 2, margin:10, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                    <Text style={styles.textStyle}> 
                        {this.props.current}
                    </Text>
                </View>
                <View style={{flex: 1, margin:10, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                    <Text style={styles.textStyle}> 
                        {this.props.total}
                    </Text>
                </View>
                <View style={{flex: 3}}>
                    <CalculatorButtons/>
                </View>
            
          </View>
        )
    }
}


const styles = {
    textStyle: {
      color: '#007aff',
      fontSize: 40,
      fontWeight: '600',
    }
  };

const mapStateToProps = ({calculator}) => {
    const {current, total} = calculator;
    return {current, total};
}
    

export default connect(mapStateToProps)(Calculator);