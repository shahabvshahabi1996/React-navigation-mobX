import React , {Component} from 'react';
import {View , Text , Button} from 'react-native';

export default class Contacts extends Component{
    render(){
        const { navigate } = this.props.navigation;
        console.log(this.props);
        return(
            <View>
                <Text>Contacts</Text>
                <Button
                 onPress={() => navigate('ContactInfo')}
                 title="Contact Info"
                 />
            </View>
        )
    }
}