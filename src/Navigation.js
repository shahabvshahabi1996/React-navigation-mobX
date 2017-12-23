import { StackNavigator ,TabNavigator , DrawerNavigator } from 'react-navigation';
import { View , Text , Button} from 'react-native';
import React, {Component} from 'react';

import Contacts from './Components/Conatcs';
import ContactInfo from './Components/ContactInfo'; 

import Store from './Store/ContactStore';

const ConatcsComponent = (props) => {
    return <Contacts {...props} Store={Store}/>
} 

const ContactInfoComponent = props =>{
    return <ContactInfo {...props} Store={Store}/>
}

const NavigationApp = StackNavigator({
    Contacts: {
        screen: ConatcsComponent,
        navigationOptions: {
            headerTitle: 'Contacts',
            headerStyle : {
                backgroundColor : '#fff',
            }
        },
    },
    ContactInfo: {
        screen: ContactInfoComponent ,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name}'s Info`,
        }),
    },
});
    
export default NavigationApp;