import React,{Component} from 'react';
import {View,Image,Text,ImageBackground} from 'react-native';
import {styles} from './StyleProfile';

export default class ProfileColor extends Component {
    render() {
        return(
            <View style={styles.container}>
                <ImageBackground style={styles.bgImage} source={require('../asset/bg.png')}>
                    <View style={styles.cardContainer}>
                        <View style={styles.cardImageContainer}>
                            <Image style={styles.cardImage} source={require('../asset/kazuma.png')}/>
                        </View>
                        <Text style={styles.cardName}>Kazuma</Text>
                        <View style={styles.cardDetailContainer}>
                            <Text style={styles.cardDetail}>Main Protagonist of the Konosuba Series</Text>
                        </View>
                        <View>
                            <Text style={styles.cardDescription}>Kazuma is a young man of average height and weight. He has short and slightly spiky chestnut-brown hair and green eyes. His usual outfit consists of a gold-trimmed green mantle, white shirt, pants and leather boots. He initially wore a green tracksuit. He usually wears his shortened katana, Chunchunmaru, on his belt.</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}