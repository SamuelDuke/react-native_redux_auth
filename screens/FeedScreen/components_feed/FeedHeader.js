import React from 'react';
import { Text, View, Image } from 'react-native';

const FeedHeader = (props) => {
    return(
        <View style={styles.container}>
            <Image source={{uri: props.avatar}}/>
            <Text>{props.firstName} {props.lastName}</Text>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        height: 150,
        borderWidth: 1,
    },
    image: {

    },
    name: {

    }
};

export default FeedHeader;