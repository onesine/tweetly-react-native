import React, { Component } from "react";
import { format } from "date-fns"
import Tweet from "../../components/Tweet/Tweet";
import tweetList from '../../constants/tweets'
import randomTweetList from '../../constants/randomTweetList'
import { View, ScrollView } from "react-native"
import { Text } from 'react-native-elements'
import styles from "./Home.style";
import TweetBox from '../../components/TweetBox'

class Home extends Component{
    state = {
        tweets: []
    };
    constructor() {
        super();
        this.addTweet = this.addTweet.bind(this);
        this.newTweet = this.newTweet.bind(this);
    }

    componentDidMount() {
        const tweets = tweetList;
        this.setState({tweets})
    }

    newTweet(tweet) {
        return {
            id: this.state.tweets.length + 1,
            date: format(new Date(), 'dd/mm/yyyy'),
            ...randomTweetList[Math.floor(Math.random() * 9)],
            tweet: tweet,
        }
    }

    addTweet(value) {
        const tweet = this.newTweet(value);
        const tweets = [
            tweet,
            ...this.state.tweets
        ];
        this.setState({tweets});
    }

    render() {
        const { tweets } = this.state;
        const printTweets = (tweet) => (
            <Tweet key={tweet.id} { ...tweet }/>
        );
        return (
            <View style={styles.home}>
                <Text h2 style={styles.title}>Tweetly</Text>
                <TweetBox addTweet={this.addTweet}/>
                <ScrollView style={styles.scrollViewStyle}>
                    { tweets.map(printTweets) }
                </ScrollView>
            </View>
        )
    }
}

export default Home;