import React,{Component} from 'react';
import {StyleSheet,View,Button} from 'react-native';

export default class FlexComponent extends Component {
    static navigationOptions={
        title:'FlexComponent',
        headerStyle: {
            backgroundColor:'#73c6b6'
        }
    };
    state={
        value:0
    };
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.firstrow}/>
                <View style={styles.secondrow}/>
                <View style={styles.thirdrow}/>
                <Button title="Go to Home" onPress={()=>this.props.navigation.popToTop()}/>
                <Button title="Go Back" onPress={()=>this.props.navigation.goBack()}/>
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