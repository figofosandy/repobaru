import React from 'react';
import {Text,View,TextInput,Button} from 'react-native';

class Pajak extends React.Component {
    state ={gaji:0,pajak:0,totalPajak:0,totalGaji:0};
    hitungPajak=()=> {
        let ttlGaji=parseInt(this.state.gaji)*12;
        this.setState({totalGaji:ttlGaji});
        let pajakPersen=0;
        let ttlPajak="Nihil";
        if(ttlGaji<0) {
            alert("Ada-ada aje");
        } else if(ttlGaji>=50000000&&ttlGaji<=250000000) {
            pajakPersen=5;
            ttlPajak=ttlGaji*pajakPersen/100;
        } else if(ttlGaji>250000000) {
            pajakPersen=15;
            ttlPajak=ttlGaji*pajakPersen/100;
        }
        this.setState({pajak:pajakPersen});
        this.setState({totalPajak:ttlPajak});
    };
    render() {
        return(
            <View>
                <Text>Menghitung Pajak</Text>
                <TextInput placeholder="Masukkan Gaji Bulanan"
                onChangeText={(inputGaji)=>this.setState({gaji:inputGaji})} value={this.state.gaji}/>
                <Button title="Hitung Pajak" onPress={()=>this.hitungPajak()} />
                <Text>Gaji Bulanan : {this.state.totalGaji}</Text>
                <Text>Pajak : {this.state.pajak}%</Text>
                <Text>Total Pajak : {this.state.totalPajak}</Text>
            </View>
        );
    }
}

export default Pajak;