import React from 'react';
import {StyleSheet, Text} from 'react-native';

function WeatherTemperature({weatherData, units, uom, showTenth, style}) {
  const externalStyles = style;
  const temperature = weatherData?.main?.temp;

  function roundTemperature() {
    if (showTenth) {
      return Math.round(temperature * 10) / 10;
    } else {
      return Math.round(temperature);
    }
  }

  return (
    <Text style={[styles.text, externalStyles]}>
      {weatherData ? roundTemperature() : '--'}
      {units ? uom[units].temp : '° F | C'}
    </Text>
  );
}

const styles = StyleSheet.create({});

export default WeatherTemperature;
