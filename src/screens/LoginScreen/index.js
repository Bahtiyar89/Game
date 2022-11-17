import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [walletKeys, seTwalletKeys] = useState({
    sk: '',
    pk: '',
  });
  return (
    <Fragment>
      <SafeAreaView
        style={{
          flex: 1,
          marginLeft: 20,
          marginRight: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('MainScreen')}
          style={{
            borderRadius: 13,
            width: '100%',
            padding: 5,
            backgroundColor: '#32A7E2',
            height: 55,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontWeight: '500',
              color: '#FFFFFF',
              textAlign: 'center',
              fontSize: 18,
            }}>
            Войти в игру
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Fragment>
  );
};

export default LoginScreen;
