import { StyleSheet, View, Text, TextInput ,Image, TouchableOpacity} from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
const Button = () => {
    return (
        <View>
            <TouchableOpacity style={{ width: 80, height: 30, backgroundColor: '#bdb76b',paddingLeft:10,marginTop:20,paddingTop:6 }}>
                <Text>Buy</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;