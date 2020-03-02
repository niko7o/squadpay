import React from 'react';

import PropTypes from 'prop-types';

import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Button = ({ text, onPress, customStyles }) => (
  <TouchableOpacity style={[styles.button, customStyles]} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    // borderRadius: 8,
    // marginTop: 16,
    borderRadius: 50,
    backgroundColor: '#55b9f3',
    shadowOffset: { height: 5, width: 5 },
    shadowColor: '#489dcf',
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  buttonText: {
    fontSize: 12,
  },
});

Button.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string.isRequired,
  customStyles: PropTypes.shape({}),
};

Button.defaultProps = {
  onPress: () => {},
  customStyles: null,
};

export default Button;
