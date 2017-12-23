import React , {Component} from 'react';
import {View , Text , Button} from 'react-native';

import Section from './Section';

import {observer} from 'mobx-react';

@observer
export default class Contacts extends Component{
    selectedContact(index){
        const { navigate } = this.props.navigation;
        this.props.Store.selectedContact = index;
        navigate('ContactInfo',{name : `${this.props.Store.contacts[index].name}`});
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
                            <Text>{contact.name}</Text>
                        </View>
                    </Section>
                    )
                })}
                    {/* <Section onPress={()=>{navigate('ContactInfo')}}>
                        <View>
                            <Text>shahab</Text>
                        </View>
                    </Section> */}
            </View>
        )
    }
}