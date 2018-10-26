import React from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../../components/Button';
import FormTextInput from '../../components/FormTextInput';

import { loginUser } from '../../actions';

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    constructor(props) {
        super(props);
        this.state = { email: '5', password: 'hohoho' };
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

                <FormTextInput
                    label='Email: '
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />

                <FormTextInput
                    label='Password: '
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />


                <Button onPress={this._loginAsync}>Login</Button>



                {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
            </View>
        );
    }
    _loginAsync = async () => {
        await this.props.loginUser({email: this.state.email, password: this.state.password});
        this.props.navigation.navigate('Main');
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

// function mapStateToProps(state) {
//     return {
//         token: state.loggedIn.token
//     }
// }

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ loginUser }, dispatch);
}

export default connect(null, matchDispatchToProps)(LoginScreen);