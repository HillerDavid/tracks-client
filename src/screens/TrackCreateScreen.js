// import '../_mockLocation';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import { Context as LocationContext } from '../contexts/LocationContext';

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext);
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();

            if (!granted) {
                throw new Error('Location permission not granted');
            }

            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                addLocation(location);
            });

        } catch (err) {
            setErr(err);
        }
    };

    useEffect(() => {
        startWatching();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text h2>Create a Track</Text>
            <Map />
            {err && <Text>Please enable location permission</Text>}
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