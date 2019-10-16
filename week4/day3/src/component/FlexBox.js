import React, {Component} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';

class FlexBox extends Component {
    render() {
        return(
            <ScrollView>
            <View>
                <Text>Flex Direction Row</Text>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{height:100,width:100,backgroundColor:'powderblue'}}/>
                    <View style={{height:100,width:100,backgroundColor:'skyblue'}}/>
                    <View style={{height:100,width:100,backgroundColor:'steelblue'}}/>
                </View>
                <Text>Flex Direction Column</Text>
                <View style={{flex:1,flexDirection:'column'}}>
                    <View style={{height:100,width:100,backgroundColor:'powderblue'}}/>
                    <View style={{height:100,width:100,backgroundColor:'skyblue'}}/>
                    <View style={{height:100,width:100,backgroundColor:'steelblue'}}/>
                </View>
                <Text>Flex Direction Row-Reverse</Text>
                <View style={{flex:1,flexDirection:'row-reverse'}}>
                    <View style={{height:100,width:100,backgroundColor:'powderblue'}}/>
                    <View style={{height:100,width:100,backgroundColor:'skyblue'}}/>
                    <View style={{height:100,width:100,backgroundColor:'steelblue'}}/>
                </View>
                <Text>Flex Direction Column-Reverse</Text>
                <View style={{flex:1,flexDirection:'column-reverse'}}>
                    <View style={{height:100,width:100,backgroundColor:'powderblue'}}/>
                    <View style={{height:100,width:100,backgroundColor:'skyblue'}}/>
                    <View style={{height:100,width:100,backgroundColor:'steelblue'}}/>
                </View>
            </View>
            </ScrollView>
        );
    }
}
export default FlexBox;