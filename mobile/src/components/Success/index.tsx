import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { useFeedback } from '../../hooks/useFeedback';
import { Copyright } from "../Copyright";

import successImg from '../../assets/success.png';

import { styles } from './styles';

interface Props {
  onSendAnotherFeedback: () => void;
}

export function Success() {
  const { setFeedbackSent, setScreenshot } = useFeedback();

  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.image} />

      <Text style={styles.title}>Agradecemos o feedback!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setFeedbackSent(false);
          setScreenshot(null);
        }}
      >
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}