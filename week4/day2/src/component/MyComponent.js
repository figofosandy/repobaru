import React from 'react';
import {View,Text} from 'react-native';

class MyComponent extends React.Component {
    // Life Cycle React-native
    // # 1
    constructor() {
        super()
        this.name="My Cool Component"
    }
    // # 2
    componentWillMount() {
        this.name='Ubah Nama Komponen';
    }
    // # View On Device
    render() {
        return(
            <View>
                <Text>{this.name}</Text>
            </View>
        );
    }
}

export default MyComponent;