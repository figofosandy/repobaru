import React,{Component} from 'react';
import {StyleSheet,View,Image,Text} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class ProfileColor extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image style={styles.cardImage} source={require('../asset/user2.jpg')}/>
                    </View>
                    <Text style={{color:'white',fontSize:20}}>Anonymous</Text>
                    <Text/>
                    <Text style={{color:'white',marginLeft:10,marginBottom:10}}>Anonymous is a decentralized international hacktivist group that is widely known for its various DDoS cyber attacks against several governments, government institutions and government agencies, corporations, and the Church of Scientology.</Text>
                </View>
            </View>
        );
    }
}

const profileCardColor='blue';

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    cardContainer:{
        alignItems:'center',
        backgroundColor:profileCardColor,
        width:300,
        height:400,
        borderColor:'black',
        borderWidth:3,
        borderStyle:'solid',
        borderRadius:20
    },
    cardImageContainer:{
        alignItems:'center',
        backgroundColor:'white',
        borderWidth:3,
        borderColor:'black',
        width:120,
        height:120,
        borderRadius:60,
        marginTop:30,
        paddingTop:15
    },
    cardImage: {
        width:80,height:80
    },
});