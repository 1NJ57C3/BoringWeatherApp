import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

function LocationResult({
  locationItem,
  index,
  fetchGet,
  setLocation,
  setWeatherData,
  setPollutionData,
  setForecastData,
  units,
  setShowLocationResults,
}) {
  const {name, state, country, lat, lon} = locationItem;

  const borderStyle = index === 0 ? styles.border.start : styles.border.end;

  function buildLocationName() {
    const locationName = [name];

    if (state) {
      locationName.push(state);
    }
    if (country) {
      locationName.push(country);
    }

    return locationName.join(', ');
  }

  function handlePress() {
    setLocation({
      name: buildLocationName(),
      city: name,
      state: state,
      country: country,
      lat: lat,
      lon: lon,
    });

    fetchGet({
      URL: weatherURL,
      action: setWeatherData,
      extraActions: fetchGet({
        URL: pollutionURL,
        action: setPollutionData,
        extraActions: fetchGet({
          URL: forecastURL,
          action: setForecastData,
        }),
      }),
    });

    setShowLocationResults(false);
  }
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.container, borderStyle]}>
      <Text>{buildLocationName()}</Text>
      <Text>Lat: {lat ? lat : '--'}</Text>
      <Text>Lon: {lon ? lon : '--'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    borderColor: 'lightgrey',
    padding: 24,
    borderRadius: 1,
    gap: 5,
  },
  border: {
    start: {
      borderWidth: 1,
    },
    end: {
      borderWidth: 1,
      borderTopWidth: 0,
    },
  },
});

export default LocationResult;
