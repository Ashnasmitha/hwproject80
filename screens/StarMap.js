import * as React from 'react';
import {View,Text,StyleSheet,TextInput,Platform,StatusBar,SafeAreaView,ImageBackground} from 'react-native';
import {WebView} from 'react-native-webview';

export default class StarMap extends React.Component{
    constructor(){
        super(),
        this.state={
            latitude:'',
            longitude:''
        }
    }
 
render(){
    const { longitude, latitude } = this.state;
    const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`
    return (
    <View style={{ flex: 1, backgroundColor: "#1a0023" }}>
        <SafeAreaView style={styles.droidSafeArea} />
            <View style={{ flex: 0.3, marginTop: 20, alignItems: 'center' }}>
                <Text style={styles.text}>Star Map</Text>

                <TextInput
                    style={styles.inputStyle}
                    placeholder='Enter Your Latitude'
                    placeholderTextColor='#ffff#000000'
                    onChangeText={(text)=>{
                        this.setState({latitude:text})
                    }}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Enter Your Longitude'
                    placeholderTextColor='#ffff#000000'
                    onChangeText={(text)=>{
                        this.setState({latitude:text})
                    }}
                />
                </View>
                <WebView
                    scalePageToFit={true}
                    source={{uri : path}}
                    style={{marginTop:20,marginBottom:20}}
                />
            </View>
        )
    }
}
const styles=StyleSheet.create({

    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    text: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignContent: "center",
    },
    inputStyle: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        textAlign: 'center',
        color: 'white',
        width: 200
    }
})