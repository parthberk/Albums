// Import library to help create a content

import React from 'react';
import {AppRegistry,View} from 'react-native';
import Header from './src/components/Header';
import Albumlist from './src/components/AlbumList';


//Create a component
//To create a componenet we'll write a javascript function
const App=()=>
(   <View>
    <Header headerText={'Albums'}/>
    <Albumlist/>
    </View>
);
//Render it to the device
AppRegistry.registerComponent('albums',()=> App);


