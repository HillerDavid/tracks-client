import '../_mockLocation';
import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import { Context as LocationContext } from '../contexts/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext);
    const [err] = useLocation(isFocused, location =>
        addLocation(location, state.recording)
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text h2>Create a Track</Text>
            <Map />
            {err && <Text>Please enable location permission</Text>}

            <TrackForm />
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

export default withNavigationFocus(TrackCreateScreen);