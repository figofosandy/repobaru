import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

class Persegi extends React.Component {
    state= {panjang:0, lebar:0, luas:0};
    hitungLuas=()=> {
        let panjang=parseInt(this.state.panjang);
        let lebar=parseInt(this.state.lebar);
        let luas=panjang*lebar;
        this.setState({luas:luas});
    }
    render() {
        return(
            <View>
                <Text>Menghitung Luas Persegi Pajang</Text>
                <TextInput style={{height:40}} placeholder="Masukan Panjang"
                onChangeText={(inputPanjang)=>this.setState({panjang:inputPanjang})}
                value={this.state.panjang}></TextInput>
                <TextInput style={{height:40}} placeholder="Masukan Lebar"
                onChangeText={(inputLebar)=>this.setState({lebar:inputLebar})}
                value={this.state.lebar}></TextInput>
                <Button title="Hitung Luas" onPress={()=>this.hitungLuas()} />
                <Text>Luas : {this.state.luas}</Text>
            </View>
        );
    }
}
export default Persegi;