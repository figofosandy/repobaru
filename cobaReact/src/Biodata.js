import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    StatusBar
} from 'react-native';

class Biodata extends React.Component {
    render() {
        return (
            <View>
                <Text> Nama : {this.props.name}</Text>
                <Text> Alamat : {this.props.alamat}</Text>
                <Text> Telp : {this.props.telp}</Text>
                <Text> email : {this.props.name}@mail.com</Text>
            </View>
        );
    }
}

export default Biodata;