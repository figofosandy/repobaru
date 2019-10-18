import React,{Component} from 'react';
import {StyleSheet,Text,View,TouchableOpacity,TextInput,Image} from 'react-native';

class ProfileActivity extends Component {    
    //Inisialisasi State
    state={
        value:null,
        berat:0,
        tinggi:0,
        bmi:0,
        type:null,
        image:null
    };

    //Function untuk handler event Action Button onPress 
    action=()=>{
        let beratInput=parseFloat(this.state.berat);
        let tinggiInput=parseFloat(this.state.tinggi)/100;
        let finalBmi=Number((beratInput/tinggiInput/tinggiInput).toFixed(2));
        this.setState({bmi:finalBmi,value:1});
        
            //Kondisi untuk menetukan type dan gambar
            if(finalBmi<18.5) {
                this.setState({
                    type:'UNDERWEIGHT',
                    image:<Image source={require('./tipe1.png')}/>
                });
            } else if(finalBmi>=18.5&&this.state.bmi<25) {
                this.setState({
                    type:'NORMAL',
                    image:<Image source={require('./tipe2.png')}/>
                });
            } else if(finalBmi>=25&&this.state.bmi<30) {
                this.setState({
                    type:'OVERWEIGHT',
                    image:<Image source={require('./tipe3.png')}/>
                });
            } else if(finalBmi>=30) {
                this.setState({
                    type:'OBESE',
                    image:<Image source={require('./tipe4.png')}/>
                });
            }  
    };
    
    //Function untuk menampilkan hasil
    result=()=>{
        if(this.state.value==1) {
            return (
                <View style={{alignItems:'center'}}>
                    <Text>Your BMI Score is</Text>
                    <Text>{this.state.bmi}</Text>
                    <Text>You are classified as {this.state.type}</Text>
                    {this.state.image}
                </View>
                );
        }
    };

    static navigationOptions={
        title:'BMI',
        headerStyle: {
            backgroundColor:'#73c6b6'
        }
    };

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.headerText}>BMI</Text>
                
                {/* Take Input From User */}
                <View style={styles.inputContainer}>
                    <View style={styles.inputJudul}>
                        <Text>Berat Badan : </Text>
                        <Text>Tinggi           :</Text>
                    </View>
                    <View style={styles.textInputContainer}>
                        <TextInput style={styles.textInput} placeholder="Masukkan Berat Anda" value={this.state.berat}
                        onChangeText={(inputBerat)=>this.setState({value:null,berat:inputBerat,image:null,type:null})}/>
                        <TextInput style={styles.textInput} placeholder="Masukkan Tinggi Anda" value={this.state.tinggi}
                        onChangeText={(inputTinggi)=>this.setState({value:null,tinggi:inputTinggi,image:null,type:null})}/>
                    </View>
                    <View style={styles.inputJudul}>   
                        <Text> kg</Text>
                        <Text> cm</Text>
                    </View>
                </View>
                {/* Action Button */}
                <TouchableOpacity style={styles.button} onPress={()=>this.action()}>
                    <Text style={{textAlign:'center'}}>Hitung</Text>
                </TouchableOpacity>

                {/* Result */}
                {this.result()}

                {/* Footer */}
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.popToTop()}>
                        <Text style={{textAlign:'center'}}>Go To Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.goBack()}>
                        <Text style={{textAlign:'center'}}>Go Back</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    textInputContainer:{
        justifyContent:'space-around'
    },
    inputJudul:{
        justifyContent:'space-around'
    },
    inputContainer:{
        flexDirection:'row'
    },
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#f5fcff'
    },
    headerText:{
        fontSize:20,
        textAlign:'center',
        margin:10,
        marginTop:50,
        fontWeight:'bold'
    },
    textInput:{
        backgroundColor:'aqua',
        width:150,
        textAlign:'center'
    },
    footer:{
        flexDirection:'row',
        position:'absolute',
        bottom:10
    },
    button:{
        width:100,
        backgroundColor:'lightblue',
        margin:10,
        height:30,
        justifyContent:'center'
    }
});
export default ProfileActivity;