import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native'
const Width = Dimensions.get('window').width;

// we import this from our components folder
import Input from '../components/Input'


class LoginScreen extends React.Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: 20 }}>
                    Login Screen
                </Text>
                <View>
                    <Input placeholder="Enter your Email" />
                    <Input placeholder="Enter your Password" />
                </View>

                {/* this.props.navigation.navigate.navigate("Login") redirect to the Login screen */}


                <View style={Styles.btnContainer}>
                    <TouchableOpacity activeOpacity={0.7} style={Styles.btn} onPress={() => this.props.navigation.navigate("Main")}><Text style={Styles.text}>Login</Text></TouchableOpacity>
                </View>

            </View>

        )
    }
}
// styling of the react native Elements
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 90,
        alignItems: "center"
    },
    btnContainer: {
        marginTop: 10
    },
    btn: {
        width: Width - 160,
        backgroundColor: '#00B7F7',
        textAlign: 'center',
        padding: 10,
        borderRadius: 50

    },
    text: {
        color: 'white',
        fontSize: 16,
        textAlign: "center"
    }

});


export default LoginScreen