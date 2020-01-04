import React from 'react'
//  we import some elements from react native
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

//  we import per device width and height for the responsiveness
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;




//  we Created an component by Name Welcome Screen
class WelcomeScreen extends React.Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text style={{ fontSize: 30, textAlign: 'center' }}>
                    Welcome Screen
                </Text>

                <View style={Styles.btnContainer}>
                     {/* this.props.navigation.navigate.navigate("login") redirect to the login screen */}
                    <TouchableOpacity activeOpacity={0.7} style={Styles.btn} onPress={() => this.props.navigation.navigate("Login")}> 
                        <Text style={Styles.text}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.btnContainer}>
                     {/* this.props.navigation.navigate.navigate("Signup") redirect to the Signup screen */}
                    <TouchableOpacity activeOpacity={0.7} style={Styles.btn} onPress={() => this.props.navigation.navigate("Signup")}>
                        <Text style={Styles.text}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}


// we use styling on the react native Element
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    btnContainer: {
        marginTop: 50
    },
    btn: {
        width: Width - 50,
        backgroundColor: 'blue',
        textAlign: 'center',
        padding: 10,
        borderRadius: 10

    },
    text: {
        color: 'white',
        fontSize: 16,
        textAlign: "center"
    }

});


export default WelcomeScreen