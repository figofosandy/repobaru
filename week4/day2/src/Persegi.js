import React from 'react';
import {View, Text, StyleSheet, TextInput, Button, Picker} from 'react-native';

class Persegi extends React.Component {
    state= {panjang:0, lebar:0, hasil:0, rumus:null};
    hitung=()=> {
        let panjang=parseInt(this.state.panjang);
        let lebar=parseInt(this.state.lebar);
        let luas=panjang*lebar;
        let keliling=2*(panjang+lebar);
        if (this.state.rumus=="luas") {
            this.setState({hasil:luas});
        } else if (this.state.rumus=="keliling") {
            this.setState({hasil:keliling});
        } else {
            this.setState({hasil:0});
        }
        console.log(this.state);
    }
    main=()=> {
        if(this.state.rumus=="luas") {
            return (<Text>Luas : {this.state.hasil} </Text>)
        } else if(this.state.rumus=="keliling") {
            return (<Text>Keliling : {this.state.hasil} </Text>)
        } else {
            return null;
        }
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
                <Picker selectedValue={this.state.rumus} style={{height:100,width:300}}
                onValueChange={(itemValue,itemIndex)=>this.setState({rumus:itemValue,hasil:0})}>
                    <Picker.Item label="Pilih 1" value={null} />
                    <Picker.Item label="Luas" value="luas" />
                    <Picker.Item label="Keliling" value="keliling" />
                </Picker>                
                <Button title="Hitung" onPress={()=>this.hitung()} />
                {this.main()}
            </View>
        );
    }
}
export default Persegi;