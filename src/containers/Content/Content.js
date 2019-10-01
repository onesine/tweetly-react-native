import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import colors from '../../../styles/variables'

const Content = () => (
    <View style={styles.Content}>
        <Text style={styles.Text}>Cool est un test</Text>
    </View>
);

const styles = StyleSheet.create({
    Content: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.darkblue,
    },
    Text: {
        color: colors.white,
        textAlign: 'center',
    }
});

export default Content;