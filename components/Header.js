import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

function Header({title, colorScheme}) {
  return (
    <SafeAreaView style={[styles.container, styles[colorScheme]?.container]}>
      <Text style={[styles.text, styles[colorScheme]?.text]}>{title}</Text>
    </SafeAreaView>
  );
}

Header.defaultProps = {
  title: 'Boring Weather App',
};

const styles = StyleSheet.create({
  dark: {},
  light: {
    container: {
      backgroundColor: 'whitesmoke',
      borderBottomColor: 'lightgrey',
      borderBottomWidth: 1,
    },
    text: {
      color: '#686868',
    },
  },
  container: {
    justifyContent: 'center',
    height: 60,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
  },
});

export default Header;
