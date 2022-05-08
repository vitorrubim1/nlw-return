import React, { useMemo } from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';

import { theme } from '../../theme';

import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  loading: boolean;
}

export function Button({ loading, ...rest }: ButtonProps) {
  const ButtonContent = useMemo(() => {
    if (loading) {
      return <ActivityIndicator color={theme.colors.text_on_brand_color} />
    }

    return <Text style={styles.title}>Enviar feedback</Text>
  }, [loading]);

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {ButtonContent}
    </TouchableOpacity>
  );
}