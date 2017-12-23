import React , {Component} from 'react';
import {View , Text} from 'react-native';

import {observer} from 'mobx-react';

@observer
export default class ContactInfo extends Component{
    render(){
        const { navigate } = this.props.navigation;
        
        return(
            <View>
                <Text>{this.props.Store.contacts[this.props.Store.selectedContact].name}</Text>
            </View>
        )
    }
}