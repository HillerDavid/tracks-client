import React, { useContext } from 'react';
import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../contexts/AuthContext';
import { FontAwesome } from '@expo/vector-icons';


const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize: 48 }}>AccountScreen</Text>
            <Spacer>
                <Button title="Sign Out" onPress={signout} />
            </Spacer>
        </SafeAreaView>
    );
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20} />
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        marginHorizontal: 10
    }
});

export default AccountScreen;