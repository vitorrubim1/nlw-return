import React, { useRef, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { Options } from '../Options';
import { Form } from '../Form';
import { Success } from '../Success';

import { useFeedback } from '../../hooks/useFeedback';

import { feedbackTypes } from '../../utils/feedbackTypes';

import { theme } from '../../theme';
import { styles } from './styles';

export type FeedbackTypes = keyof typeof feedbackTypes;

function Widget() {
  const { feedbackType, feedbackSent } = useFeedback();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const FormContent = useMemo((): JSX.Element => {
    if (!feedbackType) return <Options />;
    if (feedbackSent) return <Success />;

    return <Form />;
  }, [feedbackSent, feedbackType]);

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => bottomSheetRef.current?.expand()}
      >
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {FormContent}
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);

