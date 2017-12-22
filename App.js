import React, {Component } from 'react';
import { View , Text} from 'react-native';

import NavigationApp from './src/Navigation';


export default class App extends Component{
  render(){
    return(
      <NavigationApp mobxIsWorking="hell yes!!!!"/>
    );
  };
};