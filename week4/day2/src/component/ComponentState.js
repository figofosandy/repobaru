import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

class ComponentState extends React.Component {
    constructor() {
        super()
        this.state={ nama : 'Adit'} // Inisialisasi state
    }
    componentWillMount() {
        this.setState({nama: ' Denis'});
    }
    render() {
        return(
            <View>
                <TouchableOpacity>
                <Text>{this.state.nama}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ComponentState;