import React,{Component} from 'react';
import {StyleSheet,View} from 'react-native';

export default class FlexComponent extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.firstrow}/>
                <View style={styles.secondrow}/>
                <View style={styles.thirdrow}/>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex:1
    },
    firstrow: {
        backgroundColor:'red',
        flex:1
    },
    secondrow: {
        backgroundColor:'white',
        flex:2
    },
    thirdrow: {
        backgroundColor:'blue',
        flex:3
    }
})