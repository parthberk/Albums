// Import library to help create a content

import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/header';


//Create a component
//To create a componenet we'll write a javascript function
const App=()=>
(
    <Header headerText={'Albums'}/>
);
//Render it to the device
AppRegistry.registerComponent('albums',()=> App);


