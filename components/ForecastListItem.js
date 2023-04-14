import React from 'react';
import {StyleSheet, Pressable, View, Text} from 'react-native';

import WeatherImage from './WeatherImage';
import WeatherTemperature from './WeatherTemperature';
import WeatherDetail from './WeatherDetail';

function ForecastListItem({forecastItem, index, units, uom, onPress}) {
  const borderStyle = index === 0 ? styles.border.start : styles.border.end;

  const weatherIcon = forecastItem.weather[0].icon;
  const weatherDescription = forecastItem.weather[0].main;

  return (
    <Pressable onPress={onPress} style={[styles.root, borderStyle]}>
      <View style={[styles.flexColumn, styles.date.container]}>
        <Text style={styles.date.text}>
          {new Date(forecastItem.dt * 1000).toLocaleDateString(undefined, {
            month: 'numeric',
            day: 'numeric',
          })}
        </Text>
        <Text style={styles.date.text}>
          {new Date(forecastItem.dt * 1000).toLocaleTimeString([], {
            hour: '2-digit',
          })}
        </Text>
      </View>
      <View style={[styles.image.container]}>
        <WeatherImage
          src={IMG_URL}
          iconCode={weatherIcon}
          style={styles.image.element}
        />
        <Text style={styles.label.text}>{weatherDescription}</Text>
      </View>
      <View style={styles.temperature.container}>
        <Text style={styles.label.text}>Expected</Text>
        <WeatherTemperature
          weatherData={forecastItem}
          units={units}
          uom={uom}
          style={styles.temperature.text}
        />
      </View>
      <View style={styles.details}>
        <WeatherDetail
          label="Humidity"
          data={forecastItem.main.humidity}
          uom="%"
          style={styles.detail}
        />
        <WeatherDetail
          label="Wind"
          data={Math.round(forecastItem.wind.speed * 10) / 10}
          uom={units ? uom[units].wind : 'mph | m/s'}
          style={styles.detail}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'snow',
    borderColor: 'lightgrey',
    borderRadius: 1,
    padding: 10,
    flex: 1,
  },
  date: {
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {},
  },
  image: {
    container: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    element: {
      backgroundColor: 'white',
      borderRadius: 15,
      height: 65,
      width: 65,
    },
  },
  temperature: {
    container: {
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    text: {
      fontSize: 48,
    },
  },
  details: {
    flexDirection: 'column',
  },
  detail: {
    container: {
      flexDirection: 'column',
      alignItems: 'flex-end',
      paddingHorizontal: 0,
    },
    label: {},
    text: {
      fontSize: 20,
      textAlign: 'right',
    },
  },
  label: {
    text: {},
  },
  border: {
    start: {
      borderWidth: 0.5,
    },
    end: {
      borderWidth: 0.5,
      borderTopWidth: 0,
    },
  },
});

export default ForecastListItem;
