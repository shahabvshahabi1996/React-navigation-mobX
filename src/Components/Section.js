import React , { Component } from 'react';
import {View , Text, TouchableOpacity} from 'react-native';

export default class Section extends Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.onPress} style={{justifyContent : 'center',padding : 15,margin : 5 , backgroundColor : '#eee',borderColor : '#aaa',borderWidth : 1,alignSelf : 'stretch'}}>
                <View>
                    {this.props.children}
                </View>
            </TouchableOpacity>
        )
    }
}