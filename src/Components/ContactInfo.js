import React , {Component} from 'react';
import {View , Text , Button} from 'react-native';

export default class ContactInfo extends Component{
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Text>ContactInfo</Text>
            </View>
        )
    }
}