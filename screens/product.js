import { StyleSheet, View, Text, TextInput,TouchableOpacity ,Image,ScrollView } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import { useRoute } from "@react-navigation/native";
import Logout from'../components/logout';
import axios from 'axios';
const Product = () => {
   
    
    const navigation = useNavigation();
    const route = useRoute();
   const {userName} = route.params;
   const [productName, setProductName] = useState('');

    const handleLogout = async () => {
        try {
            // Make an HTTP GET request to the logout endpoint
            const response = await axios.get('http://IP:Port/logout');
            // If logout is successful, navigate the user to the login screen or do any other necessary actions
            navigation.navigate('Login'); // Example: Navigate to the Login screen
        } catch (error) {
            console.error('Error logging out:', error);
            // Handle error
        }
    };

    const handleBuy = (productName) => {
        console.log('Buying product');
        Alert.alert(
            'Confirm Purchase',
            `Do you want to buy ${productName}?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => {
                        setProductName(productName);
                        // Make an API call to the server to buy the product
                        axios.post('http://IP:Port/buy', { userName, productName })
                            .then(response => {
                                console.log('Product purchased:', response.data);
                                // Navigate to the "Bill" screen
                                navigation.navigate('Bill', { productName });
                            })
                            .catch(error => {
                                console.error('Error buying product:', error);
                                // Handle error
                            });
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return(
        <ScrollView>
        <View>
            <View style={styles.inputContainer}>
                <Text style={styles.login}>Product</Text>
                <View style={styles.userInfo}>
                <Text>Welcome {userName}</Text><TouchableOpacity onPress={handleLogout}> 
                    <Text style={styles.logout}>Logout</Text>
                </TouchableOpacity>
                </View>
                <Text style={{fontWeight:'bold',marginLeft:100,fontSize:18,marginBottom:20}}> Cakes</Text>
                
               

               <Image source={require('../assets/cake4.jpg')} style={{width:100,height:80}}/>
               <Text>Black Forest {"\n"}Quantity : 1 {"\n"}price: Rs. 500</Text>
               <Button onPress={() => handleBuy('Black Forest')}/>

              
                <View style={{borderBottomWidth:1,width:250,marginTop:6}}></View>

                <Image source={require('../assets/cake2.jpg')} style={{width:150,height:90,marginTop:20}}/>
               <Text>Jelly Cake {"\n"}Quantity : 1 {"\n"}price: Rs. 500</Text>
               <Button onPress={() => handleBuy('Jelly Cake')}/>

               <View style={{borderBottomWidth:1,width:250,marginTop:6}}></View>
               <Text style={{fontWeight:'bold',marginLeft:100,fontSize:18,marginBottom:20}}> Ice Cream</Text>

                    <Image source={require('../assets/butterscotch.jpg')} style={{width:150,height:90,marginTop:20}}/>
                    <Text>Butterscotch Ice-cream{"\n"}Quantity : 1 {"\n"}price: Rs. 500</Text>
                    <Button onPress={() => handleBuy('Butterscotch Ice-cream')}/>


                    <View style={{borderBottomWidth:1,width:250,marginTop:6}}></View>
              

                    <Image source={require('../assets/pista.jpg')} style={{width:150,height:120,marginTop:20}}/>
                    <Text>Pista Ice-cream {"\n"}Quantity : 1 {"\n"}price: Rs. 500</Text>
                    <Button onPress={() => handleBuy('Pista Ice-cream')}/>




            </View>
        </View>
        </ScrollView>
    );
};

export default Product;

const styles = StyleSheet.create({
    inputContainer: {
        elevation: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: '3%',
        marginTop: '18%',
        paddingVertical: '12%',
        paddingHorizontal: '5%',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:50,
        marginLeft:20

        
    },
    login: {
        fontSize: RFValue(19),
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: '10%',
    },
    logout:{
        width: 80, height: 30, backgroundColor: '#bdb76b',paddingLeft:10,marginTop:20,paddingTop:6,marginLeft:60
    }
});


