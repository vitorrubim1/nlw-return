import React, { useState } from 'react';
import { ArrowLeft } from 'phosphor-react-native';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';

import { feedbackTypes } from '../../utils/feedbackTypes';

import { FeedbackTypes } from '../Widget';
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';

import { styles } from './styles';
import { theme } from '../../theme';
import { useFeedback } from '../../hooks/useFeedback';
import { api } from '../../service/api';

export function Form() {
  const {
    feedbackType,
    setFeedbackType,
    screenshot,
    setFeedbackSent
  } = useFeedback();

  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState('');

  const feedbackTypeInfo = feedbackTypes[feedbackType!];

  async function handleSubmit() {
    if (loading) return loading;

    try {
      setLoading(true);

      const screenshotBase64 =
        screenshot && await FileSystem.readAsStringAsync(
          screenshot,
          { encoding: 'base64' }
        );

      await api.post('feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment
      });

      setFeedbackSent(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setFeedbackType(null)}>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image source={feedbackTypeInfo.image} style={styles.image} />
          <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
        onChangeText={value => setComment(value)}
      />

      <View style={styles.footer}>
        <ScreenshotButton />
        <Button loading={loading} onPress={handleSubmit} />
      </View>
    </View>
  );
}
