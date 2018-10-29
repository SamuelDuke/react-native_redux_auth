import React from 'react';
import {ScrollView, StyleSheet, Text, FlatList, View} from 'react-native';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { getFeed } from '../../actions';

import FeedCard from './components_feed/FeedCard';


class FeedScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    // renderFeed = (exp) => {
    //     return <Text>{exp.title}</Text>
    // };

    componentDidMount() {
        //console.log('this.props.checkAuth()', this.props.checkAuth());
        this.props.getFeed(this.props.token);
    }

    renderItem = ({ item }) => {
        console.log(item);
        return (
            <FeedCard
                firstName={item.creator.firstName}
                lastName={item.creator.lastName}
                avatar='https://scontent.fslc1-1.fna.fbcdn.net/v/t1.0-9/15135949_10210852099519648_49167091232330937_n.jpg?_nc_cat=107&_nc_ht=scontent.fslc1-1.fna&oh=85bdf267097fbaa78a26ed935f9eefcc&oe=5C4A7056'
                description={item.description}
            />
        );
    }

    static navigationOptions = {
        title: 'Welcome ',
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                {/*/!* Go ahead and delete ExpoLinksView and replace it with your*/}
                {/** content, we just wanted to provide you with some helpful links *!/*/}
                {/*<ExpoLinksView />*/}
                <Text>Welcome {this.props.user.firstName}</Text>
                <Text>Token: {this.props.token}</Text>
                <FlatList
                    data={this.props.feed}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.title}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});

function mapStateToProps(state) {
    return {
        user: state.user.user,
        token: state.user.token,
        feed: state.feed,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ getFeed }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FeedScreen);
