import React,{Component} from 'react';
import {View,Text,ImageBackground,Image,TextInput,Button,TouchableOpacity} from 'react-native';
import {styles} from './loginAppsProfile';

export default class loginApps extends Component {
    render() {
        return(
            <View style={styles.container}>
                <ImageBackground style={styles.bgImage} source={require('../asset/bg.png')}>
                    <View style={styles.header}>
                        <Image style={styles.logo} source={require('../asset/logo.png')}/>
                    </View>
                    <Text style={styles.judul}>Login Apps</Text>
                    <View style={styles.main}>
                        <Text style={styles.textMain}>User Name : </Text>
                        <TextInput style={styles.tiMain}  placeholder='Masukkan Username'/>
                        <Text style={styles.textMain}>Password : </Text>
                        <TextInput style={styles.tiMain} placeholder='Masukkan Password' secureTextEntry={true}/>
                        <Button style={styles.button} title='Login'/>
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity><Image style={styles.push} source={require('../asset/fb.png')}/></TouchableOpacity>
                        <TouchableOpacity><Image style={styles.push} source={require('../asset/tw.png')}/></TouchableOpacity>
                        <TouchableOpacity><Image style={styles.push} source={require('../asset/ig.png')}/></TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
