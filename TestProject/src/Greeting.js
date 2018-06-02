import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />
            </View>
        );
    }
}