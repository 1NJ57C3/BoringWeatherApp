import React from 'react';
import {StyleSheet, KeyboardAvoidingView, Text} from 'react-native';

import Hyperlink from './Hyperlink';

function Footer({colorScheme}) {
  return (
    <KeyboardAvoidingView
      style={[styles.container, styles[colorScheme]?.container]}>
      <Text style={styles.text}>
        Weather data and assets provided by{' '}
        <Hyperlink
          URL="https://openweathermap.org"
          displayText="OpenWeatherMap API"
        />
      </Text>
      <Text style={styles.text}>
        Copyright © 2023{' '}
        <Hyperlink URL="https://github.com/1NJ57C3" displayText="1NJ57C3" />.
        All rights reserved.
      </Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  light: {
    container: {
      backgroundColor: 'whitesmoke',
      borderTopColor: 'lightgrey',
      borderTopWidth: 1,
    },
    text: {
      color: '#686868',
    },
  },
  container: {
    paddingHorizontal: 13,
    paddingVertical: 13,
  },
  text: {
    textAlign: 'center',
  },
});

export default Footer;
