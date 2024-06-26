import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert,Image } from "react-native";
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { useNavigation } from '@react-navigation/native';
const Register = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const navigation = useNavigation();
     
    const isEmailValid = (email) => {
        // Regular expression for validating email format
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    };



    const onSubmitPress = async () => {

        if (!userName || !password || !address || !email) {
            Alert.alert('Error', 'Please fill in all fields.');
            return; // Exit the function early if any field is empty
        }
        if (!isEmailValid(email)) {
            Alert.alert('Error', 'Please enter a valid email address.');
            return; // Exit the function early if email format is invalid
        }
             
        console.log(userName,password,email,address)
        try {
            const response = await axios.post('http://IP:Port/register', {
                userName,
                password,
                 address,
                 email
            });
            console.log(response.data);
            // Handle successful registration, e.g., show a success message
            Alert.alert(
                'Registration successfully',
                'Please login to continue',
                [
                  { text: 'OK', onPress: () => navigation.navigate('Login') }
                ],
                { cancelable: false }
              );

             // Replace 'Home' with your destination
    
        }
         catch (error) {
            console.error('Error registering user:', error);
            // Handle registration error, e.g., show an error message
            Alert.alert('Error', 'Failed to register user. Please try again.');
        }
    };

            
    const onCreatePress = async () => {
        navigation.navigate('Login');
        
        
        }
    

    return (
        <View style={styles.container}>
            <Image source={require('../assets/CUBIES CAKE.png')} style={{width:100,height:80}}/>
            <Text style={styles.login}>Register</Text>
            <TextInput
                style={styles.input}
                placeholder="userName *"
                onChangeText={setUserName}
            />
            <TextInput
                style={styles.input}
                placeholder="Password *"
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Address *"
                onChangeText={setAddress}
            />
            <TextInput
                style={styles.input}
                placeholder="Email *"
                onChangeText={setEmail}
                keyboardType="email-address"
            />

<TouchableOpacity onPress={onCreatePress}>
            <Text>Already have account?</Text>
           </TouchableOpacity>
            
            
             <TouchableOpacity onPress={onSubmitPress} style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    login: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        width: '80%',
        marginBottom: 10,
        padding: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default Register;
