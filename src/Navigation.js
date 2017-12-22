import { StackNavigator ,TabNavigator , DrawerNavigator } from 'react-navigation';
import { View , Text , Button} from 'react-native';
import React, {Component} from 'react';

import Contacts from './Components/Conatcs';
import ContactInfo from './Components/ContactInfo'; 

const ConatcsComponent = (props) => {
    return <Contacts {...props} Store="it's Amazing Dude!!!"/>
} 

const ContactInfoComponent = props =>{
    return <ContactInfo {...props} Store="it's great we can use mobx too"/>
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
        navigationOptions: {
            headerTitle: 'Info',
            headerStyle : {
                backgroundColor : '#fff',
            }
        },
    },
});
    
export default NavigationApp;