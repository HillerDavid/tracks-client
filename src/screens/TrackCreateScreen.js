import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';

const TrackCreateScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text h2>Create a Track</Text>
            <Map />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        marginHorizontal: 10,
    }
});

export default TrackCreateScreen;