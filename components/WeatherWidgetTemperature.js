import React from 'react';
import {StyleSheet, View} from 'react-native';

import WeatherTemperature from './WeatherTemperature';
import WeatherDetail from './WeatherDetail';

function WeatherWidgetTemperature({weatherData, airPollutionData, units, uom}) {
  const airQualityIndex = airPollutionData?.list[0]?.main?.aqi;
  const hiTemp = Math.round(weatherData?.main?.temp_max);
  const loTemp = Math.round(weatherData?.main?.temp_min);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.container,
          styles.flexRow,
          styles.temperature.container,
        ]}>
        <WeatherTemperature
          weatherData={weatherData}
          units={units}
          uom={uom}
          showTenth={false}
          style={styles.temperature.text}
        />
        <View style={[styles.container, styles.flexColumn]}>
          <WeatherDetail label="H" data={hiTemp} uom="°" style={styles.hiLo} />
          <WeatherDetail label="L" data={loTemp} uom="°" style={styles.hiLo} />
        </View>
      </View>
      <WeatherDetail
        label="Air Quality"
        data={airQualityIndex}
        uom={uom.airQuality[airQualityIndex]}
        aqiColor={styles.airQuality[airQualityIndex]}
        style={airQualityIndex ? styles.aqi.loaded : styles.aqi.loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 4,
    paddingLeft: 13,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  airQuality: {
    1: 'green',
    2: 'yellowgreen',
    3: 'gold',
    4: 'orange',
    5: 'red',
  },
  temperature: {
    container: {},
    text: {
      fontSize: 51,
    },
  },
  aqi: {
    loaded: {
      container: {
        justifyContent: 'space-around',
      },
    },
    loading: {
      container: {
        paddingLeft: 15,
        paddingRight: 35,
      },
    },
  },
  hiLo: {
    container: {
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    label: {fontSize: 14},
    text: {fontSize: 18},
  },
});

export default WeatherWidgetTemperature;
