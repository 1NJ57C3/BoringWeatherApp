import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import WeatherDetail from './WeatherDetail';

function WeatherWidgetDetails({weatherData, units, uom}) {
  const feelsLike = weatherData?.main?.feels_like;
  const windSpeed = weatherData?.wind?.speed;
  const humidity = weatherData?.main?.humidity;
  const pressure = weatherData?.main?.pressure;

  return (
    <View style={styles.container}>
      <View style={styles.subheader.container}>
        <Text style={styles.subheader.text}>Details</Text>
      </View>
      <WeatherDetail
        label="Feels like"
        data={Math.round(feelsLike)}
        uom={units ? uom[units].temp : '° F | C'}
      />
      <WeatherDetail
        label="Wind"
        data={windSpeed}
        uom={units ? uom[units].wind : 'mph | m/s'}
      />
      <WeatherDetail label="Humidity" data={humidity} uom=" %" />
      <WeatherDetail label="Pressure" data={pressure} uom=" hPa" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 13,
  },
  subheader: {
    container: {
      borderBottomWidth: 0.5,
      borderColor: 'grey',
    },
    text: {
      paddingHorizontal: 9,
    },
  },
});

export default WeatherWidgetDetails;
