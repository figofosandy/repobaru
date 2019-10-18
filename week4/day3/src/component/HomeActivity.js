import React, {Component} from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';


class HomeActivity extends Component {
    static navigationOptions={
        title:'Home',
        headerStyle: {
            backgroundColor:'#03a9f4'
        },
        headerTintColor:'#fff',
        headerTitleStyle: {
            fontWeight:'bold'
        }
    };
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.headerText}>Home Activity</Text>
                <Button title="Go to State" onPress={()=>this.props.navigation.navigate('State')}/>
                <Button title="Go to Flex" onPress={()=>this.props.navigation.navigate('FlexComponent')}/>
                <Button title="Go to AlignItems" onPress={()=>this.props.navigation.navigate('AlignItems')}/>
            </View>
        );
    }  
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5fcff'
    },
    headerText:{
        fontSize:20,
        textAlign:'center',
        margin:10,
        fontWeight:'bold'
    }
});

export default HomeActivity;