import {AsyncStorage} from "react-native";
import {AUTHLOADING_LOGIN, performRequest} from "../../actions/constants";

export function authLoadingloginUser(values) {
    // const request = async userToken => {
    //     try {
    //         return await AsyncStorage.getItem('userToken');
    //     } catch (error) {
    //         // Error retrieving data
    //         console.log(error.message);
    //     }
    // };


    return {
        type: AUTHLOADING_LOGIN,
        payload: JSON.parse(values)
    }
}