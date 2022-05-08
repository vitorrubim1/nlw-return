import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FeedbackType } from '../../hooks/dtos';
import { useFeedback } from '../../hooks/useFeedback';
import { feedbackTypes } from '../../utils/feedbackTypes';

import { Copyright } from '../Copyright';

import { styles } from './styles';

export function Options() {
  const { setFeedbackType } = useFeedback();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={() => setFeedbackType(key as FeedbackType)}
          >
            <Image source={value.image} style={styles.image} />
            <Text style={styles.optionTitle}>{value.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Copyright />
    </View>
  );
}
