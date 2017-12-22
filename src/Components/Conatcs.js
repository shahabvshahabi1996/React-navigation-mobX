import React , {Component} from 'react';
import {View , Text , Button} from 'react-native';

import Section from './Section';


export default class Contacts extends Component{
    render(){
        const { navigate } = this.props.navigation;
        console.log(this.props);
        return(
            <View>
                <Section>
                    
                </Section>
            </View>
        )
    }
}