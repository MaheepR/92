import React,{Component} from 'react';
import {Text,View} from 'react-native';

export default class Logout extends Component{
    render(){
        return(
            <View style={{flex: 1,alignItems: 'center',justifyContent: 'center',}}>
                <Text>Logout</Text>
            </View>
        );
    }
}