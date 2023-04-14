import React from 'react';
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';

function WeatherImage({src, iconCode, decorated, style}) {
  const externalStyles = style;

  function renderImage() {
    return iconCode ? (
      <Image
        src={src}
        style={[styles.image, decorated ? styles[iconCode]?.image : '']}
      />
    ) : (
      <ActivityIndicator size="large" />
    );
  }

  return (
    <View
      style={[
        styles.container,
        decorated ? styles[iconCode]?.container : '',
        externalStyles,
      ]}>
      {renderImage()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    borderRadius: 30,
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  '01d': {
    container: {
      backgroundColor: '#19c5ff91',
    },
    image: {
      shadowColor: 'orangered',
      shadowOpacity: 1,
      shadowRadius: 35,
    },
  },
  '01n': {
    container: {
      backgroundColor: '#48484a',
    },
    image: {},
  },
  '02d': {
    container: {
      backgroundColor: '#19c5ff87',
    },
    image: {
      shadowColor: 'wheat',
      shadowOpacity: 0.7,
      shadowRadius: 13,
    },
  },
  '02n': {
    container: {
      backgroundColor: '#58585a',
    },
    image: {
      shadowColor: 'skyblue',
      shadowOpacity: 0.4,
      shadowRadius: 27,
    },
  },
  '03d': {
    container: {
      backgroundColor: '#19c5ff76',
    },
    image: {
      shadowColor: 'wheat',
      shadowOpacity: 0.6,
      shadowRadius: 35,
    },
  },
  '03n': {
    container: {
      backgroundColor: '#58585a',
    },
    image: {
      shadowColor: 'skyblue',
      shadowOpacity: 0.4,
      shadowRadius: 26,
    },
  },
  '04d': {
    container: {
      backgroundColor: '#bebebeb3',
    },
    image: {
      shadowColor: 'azure',
      shadowOpacity: 0.6,
      shadowRadius: 37,
    },
  },
  '04n': {
    container: {
      backgroundColor: '#58585a',
    },
    image: {
      shadowColor: 'skyblue',
      shadowOpacity: 0.3,
      shadowRadius: 37,
    },
  },
  '09d': {
    container: {
      backgroundColor: '#bebebec6',
    },
    image: {
      shadowColor: 'azure',
      shadowOpacity: 0.8,
      shadowRadius: 44,
    },
  },
  '09n': {
    container: {
      backgroundColor: '#58585a',
    },
    image: {
      shadowColor: 'azure',
      shadowOpacity: 0.2,
      shadowRadius: 32,
    },
  },
  '10d': {
    container: {
      backgroundColor: '#bebebe51',
    },
    image: {
      shadowColor: 'silver',
      shadowOpacity: 0.9,
      shadowRadius: 47,
    },
  },
  '10n': {
    container: {
      backgroundColor: '#58585a',
    },
    image: {
      shadowColor: 'azure',
      shadowOpacity: 0.2,
      shadowRadius: 26,
    },
  },
  '11d': {
    container: {
      backgroundColor: '#bebebec6',
    },
    image: {
      shadowColor: 'wheat',
      shadowOpacity: 0.9,
      shadowRadius: 44,
    },
  },
  '11n': {
    container: {
      backgroundColor: '#58585a',
    },
    image: {
      shadowColor: 'azure',
      shadowOpacity: 0.4,
      shadowRadius: 32,
    },
  },
  '13d': {
    container: {
      backgroundColor: '#19b5ff32',
    },
    image: {
      shadowColor: 'whitesmoke',
      shadowOpacity: 0.8,
      shadowRadius: 27,
    },
  },
  '13n': {
    container: {
      backgroundColor: '#68686a',
    },
    image: {
      shadowColor: 'azure',
      shadowOpacity: 0.8,
      shadowRadius: 37,
    },
  },
  '50d': {
    container: {
      backgroundColor: '#bebebe57',
    },
    image: {
      shadowColor: 'dimgrey',
      shadowOpacity: 0.7,
      shadowRadius: 31,
    },
  },
  '50n': {
    container: {
      backgroundColor: '#68686a',
    },
    image: {
      shadowColor: 'whitesmoke',
      shadowOpacity: 0.6,
      shadowRadius: 32,
    },
  },
});

export default WeatherImage;
