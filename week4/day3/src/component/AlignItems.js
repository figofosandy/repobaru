import React, {Component} from 'react';
import {View,Text,Button,ScrollView} from 'react-native';
import {styles} from './AIStyle';
export default class AlignItems extends Component {
    static navigationOptions={
        title:'AlignItems',
        headerStyle: {
            backgroundColor:'#73c6b6'
        }
    };
    render() {
        return(
            <View style={styles.container}>
                <ScrollView>
                <Text style={styles.headerStyle}>alignItems:'center'</Text>
                <View style={[{flexDirection:'column',alignItems:'center'},styles.elementsContainer]}>
                    <View style={styles.red}/>
                    <View style={styles.yellow}/>
                    <View style={styles.green}/>
                </View>
                <Text style={styles.headerStyle}>alignItems:'flex-start'</Text>
                <View style={[{flexDirection:'column',alignItems:'flex-start'},styles.elementsContainer]}>
                    <View style={styles.red}/>
                    <View style={styles.yellow}/>
                    <View style={styles.green}/>
                </View>
                <Text style={styles.headerStyle}>alignItems:'flex-end'</Text>
                <View style={[{flexDirection:'column',alignItems:'flex-end'},styles.elementsContainer]}>
                    <View style={styles.red}/>
                    <View style={styles.yellow}/>
                    <View style={styles.green}/>
                </View>
                <Button title="Go to Home" onPress={()=>this.props.navigation.popToTop()}/>
                <Button title="Go Back" onPress={()=>this.props.navigation.goBack()}/>
                </ScrollView>
            </View>
        );
    }
}
