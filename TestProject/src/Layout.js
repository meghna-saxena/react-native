import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDirectionBasics extends Component {
    render() {
        return (
            // Try setting `flexDirection` to `column`.
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
                <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
                <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
            </View>
        );
    }
};