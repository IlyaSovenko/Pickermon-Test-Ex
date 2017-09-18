import React from 'react';
import { View, AppRegistry, TouchableOpacity, Image, Animated } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default class Pickermon extends React.Component {
    constructor(){
        super();
        this.state = {
            isPressedMainButton: false,
            colorOfCircle: '#fff',
            rotateCircle: '-30 deg',
            position: 0,
        }
    }

    handleMenuBtn(){
        this.setState((prevState) => {return{
            isPressedMainButton: !prevState.isPressedMainButton,
            position: '0%',
        }});



    }


    render() {
        let Menu ;
        if(this.state.isPressedMainButton){
            Menu = <View style={{position:'relative',backgroundColor: '#090a1c',flex:1,justifyContent: 'center',alignItems:'center',marginTop:-20}}>
              <View style = {{marginBottom: -13}}><TouchableOpacity
                  style={{backgroundColor:'#0077de',
                      width: 50,
                      height: 50,
                      borderRadius:50,
                      justifyContent:'center',
                      alignItems:'center',
                  }} onPress={() => {
                  this.setState({position: "37.4%",colorOfCircle:'#0077de',rotateCircle:'-90 deg'});
                  setTimeout(this.handleMenuBtn.bind(this),800);
                  this.refs.circularProgress.performLinearAnimation(100, 700);}} >
                <Image source={require('./src/img/home.png')} style={{width:25,height:25}} />
              </TouchableOpacity></View>
              <View style={{flexDirection:'row',width: 242,justifyContent: 'space-around',marginBottom: -20}}>
                <TouchableOpacity
                    style={{backgroundColor:'#f0ac00',
                        width: 50,
                        height: 50,
                        borderRadius:50,
                        justifyContent:'center',
                        alignItems:'center',
                    }} onPress={() => {
                    this.setState({position: "37.4%",colorOfCircle:'#f0ac00',rotateCircle: '-155 deg'});
                    setTimeout(this.handleMenuBtn.bind(this),800);
                    this.refs.circularProgress.performLinearAnimation(100, 700);}} >
                  <Image source={require('./src/img/location.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{backgroundColor:'#1cce00',
                        width: 50,
                        height: 50,
                        borderRadius:50,
                        justifyContent:'center',
                        alignItems:'center',
                    }}
                  onPress={() => {
                      this.setState(
                          {position: "37.4%",colorOfCircle: '#1cce00', rotateCircle: '-30 deg'});
                      setTimeout(this.handleMenuBtn.bind(this), 800);
                      this.refs.circularProgress.performLinearAnimation(100, 700);
                  }}
                >
                  <Image source={require('./src/img/search.png')} style={{width:27,height:27}} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{backgroundColor:'#777',width: 50,height: 50,borderRadius:50,justifyContent:'center',alignItems:'center',zIndex:5}} onPress={this.handleMenuBtn.bind(this)} ><Image source={require('./src/img/close.png')} /></TouchableOpacity>
              <AnimatedCircularProgress
                  ref='circularProgress'
                  style = {{position:'absolute',top: this.state.position,zIndex:3,transform:[{rotate: this.state.rotateCircle}],}}
                  size={185}
                  width={50}
                  fill={0}
                  tintColor= {this.state.colorOfCircle}
                  backgroundColor = "rgba(255,255,255,0)"
              />
              <View style={{flexDirection:'row',width:185,justifyContent:'space-around',marginTop:0}}>
                <TouchableOpacity
                    style={{backgroundColor:'#ac12ce',
                        width: 50,
                        height: 50,
                        borderRadius:50,
                        justifyContent:'center',
                        alignItems:'center',
                    }} onPress={() => {
                    this.setState({position: "37.4%",colorOfCircle:'#ac12ce',rotateCircle: '130 deg'});
                    setTimeout(this.handleMenuBtn.bind(this),800);
                    this.refs.circularProgress.performLinearAnimation(100, 700);}} >
                  <Image source={require('./src/img/settings.png')} style={{width:20,height:20}} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{backgroundColor:'#eb2a0a',
                        width: 50,
                        height: 50,
                        borderRadius:50,
                        justifyContent:'center',
                        alignItems:'center',
                    }} onPress={() => {
                    this.setState({position: "37.4%",colorOfCircle:'#eb2a0a',rotateCircle:'45 deg',rSize:40});
                    setTimeout(this.handleMenuBtn.bind(this),800);
                    this.refs.circularProgress.performLinearAnimation(100, 700);}} >
                  <Image source={require('./src/img/alarm.png')} style = {{height:40,width:40}} />
                </TouchableOpacity>
              </View>
            </View>
        }else {
            Menu = <Animated.View style={{backgroundColor: '#090a1c',flex:1,justifyContent: 'center',alignItems:'center'}}>
              <TouchableOpacity
                  style={{backgroundColor:'#e7e7e7',
                      width: 50,
                      height: 50,
                      borderRadius:50,
                      justifyContent:'center',
                      alignItems:'center',
                      zIndex:5
                  }} onPress={() => {
                      setTimeout(this.handleMenuBtn.bind(this),0);
                  }} >
                <Image source={require('./src/img/menu.png')} />
              </TouchableOpacity>
            </Animated.View>
        }

        return (
            <View style={{flex:1}}>
                {Menu}

            </View>
    )
  }
}

AppRegistry.registerComponent('Pickermon', Pickermon);
