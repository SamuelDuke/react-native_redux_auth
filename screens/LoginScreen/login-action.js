import {AsyncStorage} from "react-native";
import {LOGIN_LOGIN, performRequest} from "../../actions/constants";

export function loginUser(values) {
    const request = performRequest('post', 'login', values, false)
        .then(
            (res) => {
                const saveUserToken = async userToken => {
                    try {
                        await AsyncStorage.setItem('user', JSON.stringify(res.data));
                        //await AsyncStorage.setItem('user', res.data.user);
                        return res.data;
                    } catch (error) {
                        // Error retrieving data
                        console.log(error.message);
                    }
                };
                return saveUserToken();
            }
        ).catch(error => {
                console.log(error);
            }
        );

    return {
        type: LOGIN_LOGIN,
        payload: request
    }
}