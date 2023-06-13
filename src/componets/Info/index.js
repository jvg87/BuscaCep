import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Info({ 
    close, 
    cep, 
    address, 
    district,
    city,
    state,
    ddd,
    city_ibge
  }) 
  {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.info}>
          <Text style={styles.textInfo}>
            Informações Sobre: 
              <Text style={{fontWeight: 'bold'}}>
                {cep}
              </Text>
          </Text>
          <Text style={styles.textInfo}>
            LOGRADOURO: 
            <Text style={{fontWeight: 'bold'}}>
              {address}
            </Text>
          </Text>
          <Text style={styles.textInfo}>
            BAIRRO: 
            <Text style={{fontWeight: 'bold'}}>
              {district}
            </Text>
          </Text>
          <Text style={styles.textInfo}>
            LOCALIDADE: 
            <Text style={{fontWeight: 'bold'}}>
              {city}
            </Text>
          </Text>
          <Text style={styles.textInfo}>
            UF: 
            <Text style={{fontWeight: 'bold'}}>
              {state}
            </Text>
          </Text>
          <Text style={styles.textInfo}>
            DDD: 
            <Text style={{fontWeight: 'bold'}}>
              {ddd}
            </Text>
          </Text>
          <Text style={styles.textInfo}>
            IBGE: 
            <Text style={{fontWeight: 'bold'}}>
              {city_ibge}
            </Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={close}
        >
          <Text style={styles.textBtn}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  modal: {
    width: '100%',
    height: '70%',
    backgroundColor: '#fcfcfc',
    borderRadius: 5,
  },
  info: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    margin: 20
  },
  textInfo: {
    color: '#000',
    fontSize: 15,
    textTransform: 'uppercase'
  },
  closeButton: {
    margin: 20,
    borderWidth: 1,
    borderColor: '#121212',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textBtn: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#121212'
  }
})