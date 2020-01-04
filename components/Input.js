import React from 'react'
import { Dimensions, TextInput, View } from 'react-native'
const Width = Dimensions.get('window').width;
class Input extends React.Component {
    render() {
        return (
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 0.5, borderRadius: 50, width: Width - 60, margin: 10, padding: 10 }}
                onChangeText={this.props.onChangeText}
                value={this.props.value}
                placeholder={this.props.placeholder}
            />
        )
    }
}

export default Input