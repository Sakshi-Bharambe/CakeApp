import { useNavigation } from '@react-navigation/native';
// const Login = () => {
//     const [userName, setUserName] = useState('');
//     const [userNameError, setUserNameError] = useState('');
//     const navigation = useNavigation();
//     const onSubmitPress =()=>{

//         navigation.navigate('Product')
//     }
//     return(
//         <View>
//             <View style={styles.inputContainer}>
//                 <Text style={styles.login}>LOGIN</Text>
//                 <Text>Login</Text>
//                 <TextInput
//                     style={{ borderBottomColor: 'black', borderBottomWidth: 1 ,marginBottom:20}}
//                     placeholder="userName"
//                     placeholderTextColor="grey" // Changed placeholder text color to black
//                 />
//                 <Text>Password</Text>
//                 <TextInput
//                     style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}
//                     placeholder="password"
//                     placeholderTextColor="grey" // Changed placeholder text color to black
//                     secureTextEntry={true} // For password input
//                 />

//                 <TouchableOpacity onPress={onSubmitPress} >
//                     <Text style={{borderWidth:1, width:100,marginTop:30,marginLeft:60, height:30,padding:6}} >Submit</Text>

//                 </TouchableOpacity>



//             </View>
//         </View>
//     );
// };

// export default Login;

// const styles = StyleSheet.create({
//     inputContainer: {
//         elevation: 10,
//         backgroundColor: 'white',
//         borderRadius: 10,
//         margin: '3%',
//         marginTop: '18%',
//         paddingVertical: '12%',
//         paddingHorizontal: '5%',
//     },
//     login: {
//         fontSize: RFValue(19),
//         fontWeight: 'bold',
//         color: 'black',
//         textAlign: 'center',
//         marginBottom: '10%',
//     },
// });

import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert,Image } from "react-native";
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const onSubmitPress = async () => {
        if (!userName || !password) {
            Alert.alert('Error', 'Please fill in both username and password.');
            return; // Exit the function early if either field is empty
        }


        try {
            const response = await axios.post('http://IP:Port/login', { // Change the URL to your login endpoint
                userName,
                password,
            });

            // Check if the login was successful (you can adjust this based on your server response)
            if (response.data.success) {
                // Navigate to the Product screen
                navigation.navigate('Product',{userName});
            } else {
                // Show an error message if login failed
                Alert.alert('Error', 'Invalid username or password');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            // Show an error message if there's an error with the request
            Alert.alert('Error', 'Failed to log in. Please try again.');
        }
    };

    const onCreatePress = async () => {
    navigation.navigate('Register');
    
    
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/CUBIES CAKE.png')} style={{width:100,height:80}}/>
            <Text style={styles.login}>LOGIN</Text>
            <TextInput
                style={styles.input}
                placeholder="Username *"
                onChangeText={setUserName}
            />
            <TextInput
                style={styles.input}
                placeholder="Password *"
                onChangeText={setPassword}
                secureTextEntry
            />
           <TouchableOpacity onPress={onCreatePress}>
            <Text>Create new Account?</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={onSubmitPress} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>

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

export default Login;
