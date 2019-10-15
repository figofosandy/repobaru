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
import Biodata from './Biodata';
import Ruang from './Ruang';

class App extends React.Component {
    render() {
        return (
            <View>
                <Ruang name="Persegi" luas="Sisi X Sisi" keliling="4 X Sisi" />
                <Text></Text>
                <Ruang name="Persegi Panjang" luas="Panjang X Lebar" keliling="2 X (Panjang+Lebar)" />
                <Text></Text>
                <Ruang name="Lingkaran" luas="3.14 X Jari-jari X Jari-jari" keliling="2 X 3.14 X Jari-jari" />
                <Text></Text>
                <Ruang name="Segitiga Sama Sisi" luas="Alas X Tinggi / 2" keliling="3 X Sisi" />
                <Text></Text>
                <Ruang name="Segitiga Sama Kaki" luas="Alas X Tinggi / 2" keliling="(2 X Sisi) + Alas" />
            </View>
        );
    }
}

class AppBio extends React.Component {
    render() {
        return (
            <View>
                <Biodata name='andi' alamat='aceh' telp='11111' />
                <Text></Text>
                <Biodata name='budi' alamat='bandung' telp='22222' />
                <Text></Text>
                <Biodata name='cindy' alamat='cengkareng' telp='33333' />
                <Text></Text>
                <Biodata name='dandy' alamat='depok' telp='44444' />
                <Text></Text>
                <Biodata name='endi' alamat='jakarta' telp='55555' />
            </View>
        );
    }
}

const AppBioStateless=()=> (
            <View>
                <Biodata name='andi' alamat='aceh' telp='11111' />
                <Text></Text>
                <Biodata name='budi' alamat='bandung' telp='22222' />
                <Text></Text>
                <Biodata name='cindy' alamat='cengkareng' telp='33333' />
                <Text></Text>
                <Biodata name='dandy' alamat='depok' telp='44444' />
                <Text></Text>
                <Biodata name='endi' alamat='jakarta' telp='55555' />
            </View>
)

const AppStateless = () => (
            <View>
                <Text>Test AppStateless</Text>
            </View>
    
)
export default AppBioStateless;
//export default AppStateless;