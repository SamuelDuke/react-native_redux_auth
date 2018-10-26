import React from 'react';
import {ScrollView, StyleSheet, Text, FlatList, View} from 'react-native';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { getFeed } from '../../actions';

class FeedScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    renderFeed = (exp) => {
        return <Text>{exp.title}</Text>
    };

    componentWillMount() {
        //console.log('this.props.checkAuth()', this.props.checkAuth());
        this.props.getFeed(this.props.token);
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
                <FlatList
                    data={this.props.feed}
                    renderItem={({item}) => <View><Text>Title: {item.title}</Text> <Text>Description: {item.description}</Text></View>}
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
