import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
                {/* <Image source={require('/react-native/img/favicon.png')} />
                <Image source={require('/react-native/img/favicon.png')} />
                <Image source={require('/react-native/img/favicon.png')} />
                <Image source={require('/react-native/img/favicon.png')} />
                <Image source={require('/react-native/img/favicon.png')} /> */}
                <Text style={{ fontSize: 96 }}>If you like</Text>
                <Text style={{ fontSize: 96 }}>Scrolling down</Text>
                <Text style={{ fontSize: 96 }}>What's the best</Text>
            </ScrollView>
        );
    }
}