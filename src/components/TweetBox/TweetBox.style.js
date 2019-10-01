import { StyleSheet } from 'react-native';
import colors from '../../../styles/variables'

const styles = StyleSheet.create({
    TweetBox: {
        marginBottom: 15,
        paddingLeft: 8,
        paddingRight: 8,
    },

    input: {
        backgroundColor: colors.white,
        height: 45,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 50,
        padding: 10,
        marginBottom: 10,
    },
});

export default styles;