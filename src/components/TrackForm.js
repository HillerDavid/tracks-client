import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { Context as LocationContext } from '../contexts/LocationContext';

const TrackForm = () => {
    const { state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName } = useContext(LocationContext);

        console.log(locations.length);

    return <>
        <Spacer>
            <Spacer />
            <Input value={name} onChangeText={changeName} placeholder="Enter Track Name" />
        </Spacer>
        <Spacer>
            {recording
                ? <Button onPress={stopRecording} title="Stop" />
                : <Button onPress={startRecording} title="Start Recording" disabled={!name} />
            }
        </Spacer>
    </>;
};

const styles = StyleSheet.create({});

export default TrackForm;