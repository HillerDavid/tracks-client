import React from 'react';
import { Text, StyleSheet, Device } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
    let points = [];

    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0) {
            points.push({
                latitude: 37.33233 + i / 1000,
                longitude: -122.03121 + i / 100,
            });
        } else {
            points.push({
                latitude: 37.33233 - i / 2000,
                longitude: -122.03121 + i / 100,
            });
        }
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 37.33233,
                longitude: -122.03121,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            <Polyline coordinates={points} lineDashPattern={[1]} />
        </MapView>
    )
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;