import React, { useContext } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../contexts/LocationContext';

const Map = () => {
    const { state: { currentLocation, locations } } = useContext(LocationContext);

    if (!currentLocation) {
        return <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 200 }} />;
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        // region={{
        //     ...currentLocation.coords,
        //     latitudeDelta: 0.01,
        //     longitudeDelta: 0.01
        // }}
        >
            <Circle
                center={currentLocation.coords}
                radius={25}
                fillColor="rgba(255, 20, 0, 1)"
                strokeColor="rgba(255, 20, 0, 1)"
            />

            <Polyline
                coordinates={locations.map(location => location.coords)}
                lineDashPattern={[1]}
                lineWidth={20}
                strokeColor="rgba(255, 20, 0, 1)"
            />

        </MapView>
    )
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;