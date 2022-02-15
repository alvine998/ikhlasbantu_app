import React from 'react';
import { StatusBar, Text, View } from 'react-native';

const Intro = (props) => {
    return (
        <View>
            <StatusBar animated backgroundColor={"#44981C"} />
            <Text>Hello</Text>
        </View>
    )
}

export default Intro;