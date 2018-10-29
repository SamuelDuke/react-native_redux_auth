import React from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../../components/Button';
import FormTextInput from '../../components/FormTextInput';

import { addExp } from '../../actions';

class AddScreen extends React.Component {
    static navigationOptions = {
        title: 'Please AddScreen',
    };

    constructor(props) {
        super(props);
        this.state = { title: '5', description: 'hohoho' };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 28,
                        textAlign: 'center',
                    }}
                >
                    Welcome to our App!
                </Text>
                <Text>Token: {this.props.token}</Text>

                <FormTextInput
                    label='Title: '
                    onChangeText={(title) => this.setState({title})}
                    value={this.state.title}
                />

                <FormTextInput
                    label='Description: '
                    onChangeText={(description) => this.setState({description})}
                    value={this.state.description}
                />


                <Button onPress={this._loginAsync}>Submit</Button>



                {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
            </View>
        );
    }
    _loginAsync = async () => {
        console.log(this.state.title, this.state.description);
        await this.props.addExp(this.props.token, {title: this.state.title, description: this.state.description});
        this.props.navigation.navigate('Feed');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
        marginLeft: 25,
        marginRight: 25,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
});

function mapStateToProps(state) {
    return {
        user: state.user.user,
        token: state.user.token,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ addExp }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(AddScreen);