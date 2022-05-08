import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },

  options: {
    width: '100%',

    marginBottom: 48,

    flexDirection: 'row',
    justifyContent: 'center'
  },

  title: {
    fontSize: 20,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
    
    marginBottom: 32,
  },

  optionContainer: {
    width: 104,
    height: 112,

    padding: 8,
    marginHorizontal: 8,
    borderRadius: 8,

    backgroundColor: theme.colors.surface_secondary,

    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 40,
    height: 40,
  },

  optionTitle: {
    fontSize: 14,
    marginTop: 8,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },
});