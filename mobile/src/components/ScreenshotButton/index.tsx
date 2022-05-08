import React, { useMemo } from 'react';
import { Camera, Trash } from 'phosphor-react-native';
import { Image, TouchableOpacity, View } from 'react-native';
import { captureScreen } from 'react-native-view-shot';

import { useFeedback } from '../../hooks/useFeedback';

import { theme } from '../../theme';

import { styles } from './styles';

export function ScreenshotButton() {
  const { screenshot, setScreenshot } = useFeedback();

  function handleScreenshot() {
    captureScreen({
      format: 'jpg',
      quality: 0.8
    })
      .then(uri => setScreenshot(uri))
      .catch(error => console.log(error));
  };

  const ButtonContent = useMemo(() => {
    if (!!screenshot) {
      return (
        <View style={styles.image}>
          <Image style={styles.image} source={{ uri: screenshot }} />

          <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
          />
        </View>
      )
    }

    return <Camera size={24} color={theme.colors.text_secondary} weight="bold" />;
  }, [screenshot]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => screenshot ? setScreenshot(null) : handleScreenshot()}
    >
      {ButtonContent}
    </TouchableOpacity>
  );
}