import { StyleSheet } from "react-native";
import colors from "../../../styles/variables"

const styles = StyleSheet.create({
    Tweet: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderWidth: 0.5,
        borderColor: colors.blue,
        marginBottom: 4,
        padding: 4,
    },

    avatar: {
        height: 60,
        width: 60,
    },

    left: {
    },

    right: {
        flex: 1,
        paddingLeft: 8,
    },

    top: {
        flexDirection: 'row'
    },

    date: {
        marginRight: 10,
    },

    username: {
        color: colors.primary,
    },

    tweet: {
        fontWeight: 'bold',
    }
});

export default styles;
