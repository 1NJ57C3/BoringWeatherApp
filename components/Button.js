import React from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';

function Button({onPress, title, disabled, style}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled.forecast}
      style={[styles.container, disabled ? style : styles.disabledContainer]}>
      <Text style={[styles.text, disabled ? style : styles.disabledText]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgrey',
    borderTopWidth: 1,
    flex: 1,
  },
  text: {
    textTransform: 'uppercase',
    textAlign: 'center',
    color: 'black',
    padding: 16,
  },
  disabledContainer: {
    backgroundColor: '#00000080',
    borderColor: 'lightgrey',
    borderTopWidth: 1,
  },
  disabledText: {
    color: 'darkgrey',
  },
});

export default Button;
