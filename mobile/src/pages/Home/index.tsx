import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons'
import { View, Image, StyleSheet, Text, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const Home = () => {
  const navigation = useNavigation();

  const [ufs, setUfs] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState('0');

  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState('');

  function handleNavigateToPoints() {
    navigation.navigate('Points', {
      selectedUf,
      selectedCity
    });
  }

  useEffect(() => {
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(respose => {
      const uf = respose.data.map(uf => uf.sigla) ;
      setUfs(uf);
    })
  }, []);

  useEffect(() => {

    if(selectedUf === '0') return;

    axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
    .then(response => {
      const cityNames = response.data.map(city => city.nome);

      setCities(cityNames);
    })

  }, [selectedUf])

  function handleSelectUf(uf: string) {
    setSelectedUf(uf);
  }

  function handleSelectCity(city: string) {
    setSelectedCity(city);
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ImageBackground 
        source={require("../../assets/home-background.png")} 
        style={styles.container}
        imageStyle={{ width: 274, height: 368 }}
      >
        <View style={styles.main}>
          <Image source={require("../../assets/logo.png")} />
          <View>
            <Text style={styles.title}>seu marketplace de coletas de resíduos</Text>
            <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleda de forma eficiente.</Text>
          </View>
        </View>

        <View style={styles.footer}>

          <RNPickerSelect
              key='ufRNPickerSelect'
              style={pickerSelectStyles} 
              placeholder={{
                key: 'ufPlaceholder',
                label:'Selecione o Estado',
                value: null,
              }}
              onValueChange={(value) => handleSelectUf(value)}
              items={
                ufs.map(uf => (
                  { key: uf, label: uf, value: uf }
                ))
              }
              value={selectedUf}
          />
          <RNPickerSelect
              key='cityRNPickerSelect'
              style={pickerSelectStyles}
              placeholder={{
                key: 'cityPlaceholder',
                label:'Selecione a Cidade',
                value: null,
              }}
              onValueChange={(value) => handleSelectCity(value)}
              items={
                cities.map(city => (
                  { key: city, label: city, value: city }
                ))
              }
              value={selectedCity}
          />

          <RectButton style={styles.button} onPress={handleNavigateToPoints}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="arrow-right" color="#FFF" size={24}/>
              </Text>
            </View>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    color: 'black',
    paddingRight: 30,
    height: 60,
    backgroundColor: '#FFF',
    marginBottom: 8,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    height: 60,
    backgroundColor: '#FFF',
    marginBottom: 8,
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default Home;