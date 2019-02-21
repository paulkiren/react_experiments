import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';
class PizzaTransaltor extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40 }}
                    onChange={(text) => {alert(JSON.stringify(text)); this.setState({ ...text }); }}
                    placeholder='Please Input Text' />
                <Text style={{ padding: 10, fontSize: 42 }}>

                    {alert(JSON.stringify(this.state.text))}
                </Text>
            </View>
        );
    }
}
export default PizzaTransaltor
