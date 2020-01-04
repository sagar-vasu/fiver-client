import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native'
const Width = Dimensions.get('window').width;
import Input from '../components/Input'


class SignupScreen extends React.Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: 20 }}>
                    Signup Screen
                </Text>
                {/* These Input are our components which i design in compnents folder */}
                <View>
                    <Input placeholder="Enter your Name" />
                    <Input placeholder="Enter your Email" />
                    <Input placeholder="Enter your Password" />
                </View>


                <View style={Styles.btnContainer}>
                    {/* this.props.navigation.navigate.navigate("Login") redirect to the Login screen */}
                    <TouchableOpacity activeOpacity={0.7} style={Styles.btn} onPress={() => this.props.navigation.navigate("Login")}><Text style={Styles.text}>Signup</Text></TouchableOpacity>
                </View>

            </View>

        )
    }
}


// we use styling on the react native Element

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 90
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


export default SignupScreen