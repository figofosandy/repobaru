import React,{Component} from 'react';
import {StyleSheet,Text,View,Button,TextInput,TouchableOpacity} from 'react-native';


class ProfileActivity extends Component {
    static navigationOptions={
        title:'State',
        headerStyle: {
            backgroundColor:'#73c6b6'
        }
    };
    state={
        value:0,
        text:""
    };
    minus=()=> {
        let currentValue=this.state.value;
        this.setState({value:currentValue-1})
    }
    // #2 Method untuk merubah state (Tambah)
    plus=()=> {
        let currentValue=this.state.value;
        this.setState({value:currentValue+1})
    }
    render() {
        let currentValue=this.state.value;
        return(
            <View style={styles.container}>
                <Text style={styles.headerText}>State</Text>                
                <Text>Nilai state saat ini : {currentValue}</Text>
                <TouchableOpacity style={styles.button} onPress={()=>this.plus()}>
                    <Text style={{color: '#7FFF00'}}>Tambah</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>this.minus()}>
                    <Text style={{color: '#FF0000'}}>Kurang</Text>
                </TouchableOpacity>
                <TextInput placeholder="Masukkan Sesuatu"
                onChangeText={(input)=>this.setState({text:input})} value={this.state.text}/>
                <Text>{this.state.text}</Text>
                <Button title="Go to Home" onPress={()=>this.props.navigation.popToTop()}/>
                <Button title="Go Back" onPress={()=>this.props.navigation.goBack()}/>
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
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#808080',
        padding: 20,
        margin: 4
    }
});
export default ProfileActivity;