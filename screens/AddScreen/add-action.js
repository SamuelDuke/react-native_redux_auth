import {AsyncStorage} from "react-native";
import {ADD_ADD, performRequest} from "../../actions/constants";

export function addExp(token, values) {
    const request = performRequest('post', '/experience/', values, token)
        .then((res) => {
                return res.data;
            }
        ).catch(error => {
                console.log(error);
            }
        );

    return {
        type: ADD_ADD,
        payload: request
    }
}