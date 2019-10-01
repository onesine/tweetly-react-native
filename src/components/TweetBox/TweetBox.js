import React, { Component } from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './TweetBox.style';
import colors from '../../../styles/variables';

class TweetBox extends Component{
    constructor() {
        super();
        this._handleChangeValue = this._handleChangeValue.bind(this);
        this._submitNewTweet = this._submitNewTweet.bind(this);
    }

    state = {
        value: '',
    };

    _handleChangeValue(value) {
        this.setState({value})
    }

    _submitNewTweet() {
        if (this.state.value.length) {
            this.props.addTweet(this.state.value);
            this.setState({value: ""})
        }
        Keyboard.dismiss();
    }

    render() {
        const { value } = this.state;
        return (
            <View style={styles.TweetBox}>
                <Text>0 / { value.length }</Text>
                <TextInput
                    style={styles.input}
                    editable
                    maxLength={140}
                    numberOfLines={4}
                    onChangeText={this._handleChangeValue}
                    multiLine
                    value={value}
                />
                <Button
                    onPress={this._submitNewTweet}
                    title={"Tweeter"}
                    buttonStyle={{backgroundColor: colors.primary}}
                    icon={
                        <Icon
                            name="twitter-square"
                            size={15}
                            color="white"
                        />
                    }
                />
            </View>
        );
    }
}

export default TweetBox;