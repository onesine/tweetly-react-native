import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Tweet.style";

const Tweet = ({avatar, date, username, tweet}) => (
    <View style={styles.Tweet}>
        <View style={styles.left}>
            <Image source={ avatar } style={styles.avatar}/>
        </View>

        <View style={styles.right}>
            <View style={styles.top}>
                <Text style={styles.date}>{ date }</Text>
                <Text style={styles.username}>@{ username }</Text>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.tweet}>{ tweet }</Text>
            </View>
        </View>
    </View>
);

export default Tweet;