import {AsyncStorage} from "react-native";
import {FEED_GETFEED, performRequest} from "../../actions/constants";


export function getFeed(token, values) {

    const request = performRequest('get', '/experience/all', values, token)
        .then(
            (res) => {
                //console.log(res.data);
                return res.data;
            }
        ).catch(error => {
                console.log(error);
            }
        );



    //
    // const request = axios.get('http://54.69.223.221:8080/api/experience', { 'headers': { 'Authorization': token } })
    //     .then( res => {
    //         return res
    //     })
    //     .catch(error => {console.log(error)});

    return {
        type: FEED_GETFEED,
        payload: request
    }
}