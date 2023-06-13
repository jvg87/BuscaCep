import React, { useState, useRef } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Modal} from 'react-native';

import api from './src/services/api';

import Info from './src/componets/Info';

export default function App() {
  const inputRef = useRef();
  const [number, setNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [cepUser, setCepUser] = useState({})

  async function handleSearch(){
    if (number === ''){
      alert('Digite um CEP válido!');
      return;
    }
    try {
      const response = await api.get(`/${number}`);
      setModalVisible(true)
      setCepUser(response.data);
    } catch (error) {
      console.log(`ERROR: ${error}`);
      alert('Digite um CEP válido!');
    }
    
  }

  function closeModal(){
    setModalVisible(!modalVisible);
    setNumber('');
    inputRef.current.focus();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>BuscaCep</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex: 00000000'
          onChangeText={(text) => setNumber(text)}
          keyboardType='numeric'
          value={number}
          ref={inputRef}
        />
        <TouchableOpacity
          onPress={handleSearch}
          style={styles.searchBtn}
        >
          <Text style={styles.textSearchBtn}>Buscar</Text>
        </TouchableOpacity>
        <Modal
          animationType='slide'
          visible={modalVisible}
          transparent={true}
        >
          <Info
            close={closeModal}
            address={cepUser.address}
            cep={cepUser.cep}
            city={cepUser.city}
            city_ibge={cepUser.city_ibge}
            ddd={cepUser.ddd}
            district={cepUser.district}
            state={cepUser.state}
          />
        </Modal>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#109648'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fcfcfc',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    backgroundColor: '#fcfcfc',
    borderRadius: 5,
    width: '90%',
    padding:10,
    fontSize:18,
    marginBottom: 20
  },
  searchBtn:{
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: '#fcfcfc',

  },
  textSearchBtn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fcfcfc'
  },
});
