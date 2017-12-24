import React , {Component} from 'react';
import {View , Text , Button} from 'react-native';

import Section from './Section';

import {observer} from 'mobx-react';

var ContactsFile = require('react-native-contacts')
var data = [{
    givenName : 'shohari'
},{
    givenName : 'hamsarrii'
},{
    givenName : 'baba'
},{
    givenName : 'shahin'
},{
    givenName : 'maman'
}];

@observer
export default class Contacts extends Component{
    componentWillMount(){
        ContactsFile.getAll((err, contacts) => {
            if(err === 'denied'){
                console.log(err,'access denied!!!');
            } else {
                console.log(contacts);
                if(!contacts.length > 0){
                    this.props.Store.contacts = data;
                }
                else{
                    this.props.Store.contacts = contacts;
                }
            }
        })
    }
    selectedContact(index){
        const { navigate } = this.props.navigation;
        this.props.Store.selectedContact = index;
        navigate('ContactInfo',{name : `${this.props.Store.contacts[index].givenName}`});
    }
    render(){
        const { navigate } = this.props.navigation;
        const {contacts} = this.props.Store;
        return(
            <View>
                {contacts.map((contact,index)=>{
                    return(
                    <Section key={index} onPress={()=>{this.selectedContact(index)}}>
                        <View>
                            <Text>{contact.givenName}</Text>
                        </View>
                    </Section>
                    )
                })}
            </View>
        )
    }
}