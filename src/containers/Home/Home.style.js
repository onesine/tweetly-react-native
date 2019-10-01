import { StyleSheet } from "react-native";
import colors from "../../../styles/variables"

const styles = StyleSheet.create({
    home: {
        marginTop: 100,
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
    },

    title: {
        textAlign: 'center',
    },

    scrollViewStyle: {
        flex: 1,
    }
});

export default styles;