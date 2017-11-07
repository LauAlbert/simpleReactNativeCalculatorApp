import React, { Component } from 'react';
import { TouchableOpacity, Text, Dimensions, View } from 'react-native';
import { connect } from 'react-redux';
import { numberSelect, periodSelect, symbolSelect, equalSelect, clearSelect, percentSelect, parenthesesSelect, signSelect } from '../actions';

class CalculatorButtons extends Component {

    periodSelect() {
        this.props.periodSelect();
    }


    numberSelect(number) {
        this.props.numberSelect(number);
    }

    symbolSelect(symbol) {
        console.log(symbol);
        this.props.symbolSelect(symbol);
    }

    equalSelect() {
        this.props.equalSelect();
    }

    clearSelect() {
        this.props.clearSelect();
    }

    percentSelect() {
        this.props.percentSelect();
    }

    parenthesesSelect() {
        this.props.parenthesesSelect();
    }

    signSelect() {
        this.props.signSelect();
    }

    render() {
        return (
            <View style={{flex:1}}>
             
                    <View style={{flex:1, flexDirection: 'row'}}>
                        <TouchableOpacity onPress={this.clearSelect.bind(this)} style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>
                                C
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.parenthesesSelect.bind(this)} style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>
                                ( )
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.percentSelect.bind(this)} style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>
                                %
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.symbolSelect.bind(this, "/")} style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>
                                /
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, flexDirection: 'row'}}>
                        <TouchableOpacity onPress={this.numberSelect.bind(this, 7)} style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>
                                7
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.numberSelect.bind(this, 8)} style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>
                                8
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.numberSelect.bind(this, 9)} style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>
                                9
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.symbolSelect.bind(this, "*")} style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>
                                x
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, flexDirection: 'row'}}>
                        <TouchableOpacity onPress={this.numberSelect.bind(this, 4)} style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>
                                4
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.numberSelect.bind(this, 5)} style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>
                                5
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.numberSelect.bind(this, 6)} style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>
                                6
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.symbolSelect.bind(this, "-")} style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>
                                -
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, flexDirection: 'row'}}>
                        <TouchableOpacity onPress={this.numberSelect.bind(this, 1)} style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>
                                1
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.numberSelect.bind(this, 2)} style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>
                                2
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.numberSelect.bind(this, 3)} style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>
                                3
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.symbolSelect.bind(this, "+")} style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>
                                +
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, flexDirection: 'row'}}>
                        <TouchableOpacity onPress={this.signSelect.bind(this, 0)} style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>
                                +/-
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.numberSelect.bind(this, 0)} style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>
                                0
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.periodSelect.bind(this)} style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>
                                .
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.equalSelect.bind(this)} style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>
                                =
                            </Text>
                        </TouchableOpacity>
                    </View>

            </View>
        )
    }
}


const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        justifyContent: 'center',
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        margin: 5,
    }
}

export default connect(null, {numberSelect, periodSelect, symbolSelect, equalSelect, clearSelect, percentSelect, parenthesesSelect, signSelect})(CalculatorButtons);