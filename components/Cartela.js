import {Alert, View} from 'react-native';
import React, { useState } from "react";
import { Avatar, Button, Modal, Portal, Text, Provider, Badge } from 'react-native-paper';

export default function Cartela() {
  let [array, setArray] = useState([])
  let [array2, setArray2] = useState([])

  const geraNumero = () => {
    let provisorio = []
    let provisorio2 = []
    let randomNumber;
    let randomNumber2;
    let tmp;
    let tmp2;
    for (let i = 0 ; i < 35 ; i++){
      provisorio[i] = i+1;
    }
    for (let i = provisorio.length; i;) {
      randomNumber = Math.random() * i-- | 0;
      tmp = provisorio[randomNumber];
      provisorio[randomNumber] = provisorio[i];
      provisorio[i] = tmp;
    }

    for (let i = 0 ; i < 35; i++){
      provisorio2[i] = i+1;
    }
    for (let i = provisorio2.length; i;) {
      randomNumber2 = Math.random() * i-- | 0;
      tmp2 = provisorio2[randomNumber2];
      provisorio2[randomNumber2] = provisorio2[i];
      provisorio2[i] = tmp2;
    }
    setArray2(provisorio2)
    console.log(array2);
    setArray(provisorio)
    console.log(array)
  }
  

  const ComparaNumeros = () => {
    const acertos = []
    array.filter(function(element) {
      if (array2.includes(element)) {
        acertos.push(element)
      }
    });
    
    Alert.alert(
      "Resultado",
      "Você acertou os numeros" + acertos,
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    )
    console.log(acertos)
  } 

  const Modalzinho = () => {
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', padding: 20};
  
    return (
      <Provider>
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text> Jogo Bingo</Text>
              <Avatar.Text size={52} label={array2[0]} />
              <Avatar.Text size={52} label={array2[1]} />
              <Avatar.Text size={52} label={array2[2]} />
              <Avatar.Text size={52} label={array2[3]} />
              <Avatar.Text size={52} label={array2[4]} />
              <Avatar.Text size={52} label={array2[5]} />
            </View>
            <Button title='Voltar' style={{marginTop: 30, backgroundColor: 'gold'}} onPress={hideModal}>
              Voltar
            </Button>
            <Button title='Comparar' style={{marginTop: 30, backgroundColor: 'gold'}} onPress={ComparaNumeros}>
              Comparar
            </Button>
          </Modal>
        </Portal>
        <Button title='Mostrar' style={{marginTop: 15, backgroundColor: 'gold'}} onPress={showModal}>
          Mostrar
        </Button>
      </Provider>
    );
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Gerador de cartela</Text>
      <Button title="Gerar cartela" onPress={geraNumero} style={{backgroundColor: 'gold'}}>
        Gerar Cartela
      </Button>
      <Text>Esta é a sua cartela Bingo</Text> 
      <View style={{flexWrap: "wrap", flexDirection: 'column'}}>
        <View style={{flexWrap: "wrap", flexDirection: 'row'}}>
          <Badge size={42} alignItem="center" >{array[0]}</Badge>
          <Badge size={42} alignItem="center" >{array[1]}</Badge>
          <Badge size={42} alignItem="center" >{array[2]}</Badge>
          <Badge size={42} alignItem="center" >{array[3]}</Badge>
          <Badge size={42} alignItem="center" >{array[4]}</Badge>
          <Badge size={42} alignItem="center" >{array[5]}</Badge>
          <Badge size={42} alignItem="center" >{array[6]}</Badge>
        </View>
        <View style={{flexWrap: "wrap", flexDirection: 'row'}}>
          <Badge size={42} alignItem="center" >{array[7]}</Badge>
          <Badge size={42} alignItem="center" >{array[8]}</Badge>
          <Badge size={42} alignItem="center" >{array[9]}</Badge>
          <Badge size={42} alignItem="center" >{array[10]}</Badge>
          <Badge size={42} alignItem="center" >{array[11]}</Badge>
          <Badge size={42} alignItem="center" >{array[12]}</Badge>
          <Badge size={42} alignItem="center" >{array[13]}</Badge>
        </View>
        <View style={{flexWrap: "wrap", flexDirection: 'row'}}>
          <Badge size={42} alignItem="center" >{array[14]}</Badge>
          <Badge size={42} alignItem="center" >{array[15]}</Badge>
          <Badge size={42} alignItem="center" >{array[16]}</Badge>
          <Badge size={42} alignItem="center" >{array[17]}</Badge>
          <Badge size={42} alignItem="center" >{array[18]}</Badge>
          <Badge size={42} alignItem="center" >{array[19]}</Badge>
          <Badge size={42} alignItem="center" >{array[20]}</Badge>
        </View>
        <View style={{flexWrap: "wrap", flexDirection: 'row'}}>
          <Badge size={42} alignItem="center" >{array[21]}</Badge>
          <Badge size={42} alignItem="center" >{array[22]}</Badge>
          <Badge size={42} alignItem="center" >{array[23]}</Badge>
          <Badge size={42} alignItem="center" >{array[24]}</Badge>
          <Badge size={42} alignItem="center" >{array[25]}</Badge>
          <Badge size={42} alignItem="center" >{array[26]}</Badge>
          <Badge size={42} alignItem="center" >{array[27]}</Badge>
        </View>
      </View>
      < Modalzinho />
      {/* <Button
        title="Ir para o jogo"
        onPress={() => navigation.push('JogoBingo')}
      /> */}
    </View>
  );
}
