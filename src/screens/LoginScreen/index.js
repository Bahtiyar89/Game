import React, {Fragment, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Modal,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import remoteConfig from '@react-native-firebase/remote-config';

const LoginScreen = ({navigation}) => {
  const [urlRemote, setUrlRemote] = useState('');
  const [isEmulat, setIsEmulat] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  DeviceInfo.isEmulator().then(isEmulator => {
    if (isEmulator) {
      setIsEmulat(isEmulator);
    }
  });

  useEffect(() => {
    remoteConfig()
      .setDefaults({
        url: '',
      })
      .then(() => remoteConfig().fetchAndActivate())
      .then(fetchedRemotely => {
        if (fetchedRemotely) {
          console.log('Configs were retrieved from the backend and activated.');
        } else {
          console.log(
            'No configs were fetched from the backend, and the local configs were already activated',
          );
        }
      });
    const awesomeNewFeature = remoteConfig().getValue('url');
    setUrlRemote(awesomeNewFeature?._value);
  }, []);

  const closeModalAndRedirect = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('MainScreen');
  };
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
          onPress={() => setModalVisible(true)}
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22,
          }}>
          <View
            style={{
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 35,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <Text
              style={{
                marginBottom: 15,
                textAlign: 'center',
              }}>
              {'Ваш конфиг url: ' + `${urlRemote}`}
            </Text>
            <Text
              style={{
                marginBottom: 15,
                textAlign: 'center',
              }}>
              {'У вас эмулятор ? ' + `${isEmulat}`}
            </Text>
            <Pressable
              style={[
                {
                  borderRadius: 20,
                  padding: 10,
                  elevation: 2,
                },
                {
                  backgroundColor: '#2196F3',
                },
              ]}
              onPress={closeModalAndRedirect}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Продолжить
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </Fragment>
  );
};

export default LoginScreen;
