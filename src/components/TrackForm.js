import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { Context as LocationContext } from '../contexts/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const { state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();

    return <>
        <Spacer>
            <Spacer />
            <Input value={name} onChangeText={changeName} placeholder="Enter Track Name" />
        </Spacer>
        <Spacer>
            {recording
                ? <Button onPress={stopRecording} title="Stop" />
                : <Button onPress={startRecording} title="Start Recording" />
            }
        </Spacer>
        <Spacer>
            {!recording && locations.length
                ? <Button title="Save Recording" onPress={saveTrack} /> : null
            }
        </Spacer>
    </>;
};

const styles = StyleSheet.create({});

export default TrackForm;