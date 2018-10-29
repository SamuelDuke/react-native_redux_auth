import React from 'react';
import { Text, View, Image } from 'react-native';

const FeedCard = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.avatar}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
                <Text style={styles.name}>{props.firstName} {props.lastName}</Text>
            </View>
            <View style={styles.imageView}>
                <Image
                    resizeMode="contain"
                    source={{uri: 'http://imgs.steps.dragoart.com/how-to-draw-a-pony-step-7_1_000000053055_5.jpg'}}
                    style={styles.image}
                />
            </View>

            <View>
                <Text>Description: {props.description}</Text>
            </View>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        borderWidth: 1,
        margin: 5,
        borderColor: '#347bef',
        borderRadius: 3,
        backgroundColor: '#e6ecf7',
        //justifyContent: 'space-between'
    },
    header: {
        flexDirection: 'row',
        height: 26,

    },
    avatar: {
        width: 20,
        height: 20,
        borderRadius: 15,
        flexDirection: 'column',
        margin: 3,


    },
    imageView: {

        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',

    },
    image: {
        width: null,
        height: 305,
    },
    name: {
        flexDirection: 'column',
        margin: 3,
    },

};


export default FeedCard;