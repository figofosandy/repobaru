import {StyleSheet} from 'react-native';

const profileCardColor=null;

const styles=StyleSheet.create({
    bgImage:{
        width:300,
        height:400,
        alignItems:'center'
    },
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
        borderStyle:'solid'
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
    cardName:{
        color:'white',
        fontWeight:'bold',
        fontSize:24,
        marginTop:30,
        textShadowColor:'black',
        textShadowOffset:{height:2,width:2},
        textShadowRadius:3
    },
    cardImage: {
        width:80,height:80
    },
    cardDetailContainer:{
        borderColor:'yellow',
        borderBottomWidth:3
    },
    cardDetail:{
        fontWeight:'bold',
        marginTop:10,
        marginBottom:10,
        textShadowColor:'white',
        textShadowOffset:{height:1,width:1},
        textShadowRadius:2
    },
    cardDescription:{
        color:'grey',
        fontStyle:'italic',
        marginTop:10,
        marginRight:40,
        marginLeft:40,
        marginBottom:10,
        fontSize:11,
        textShadowColor:'black',
        textShadowOffset:{height:1,width:1},
        textShadowRadius:1
    }
});

export {styles};