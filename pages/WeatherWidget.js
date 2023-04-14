import React from 'react';
import {StyleSheet, Pressable, View} from 'react-native';

import WidgetHeader from '../components/WidgetHeader';
import WeatherWidgetImage from '../components/WeatherWidgetImage';
import WeatherWidgetTemperature from '../components/WeatherWidgetTemperature';
import WeatherWidgetDetails from '../components/WeatherWidgetDetails';

function WeatherWidget({
  setShowLocationSearch,
  weatherData,
  pollutionData,
  location,
  units,
  uom,
}) {
  return (
    <Pressable style={styles.root} onPress={() => setShowLocationSearch(true)}>
      <WidgetHeader
        weatherData={weatherData}
        location={location}
        title="Current Weather For"
      />
      <View style={styles.container}>
        <WeatherWidgetImage weatherData={weatherData} />
      </View>
      <View style={styles.details}>
        <WeatherWidgetTemperature
          weatherData={weatherData}
          airPollutionData={pollutionData}
          units={units}
          uom={uom}
        />
        <WeatherWidgetDetails
          weatherData={weatherData}
          units={units}
          uom={uom}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    justifyContent: 'space-around',
    backgroundColor: 'snow',
  },
  container: {
    alignItems: 'center',
  },
  details: {
    flexDirection: 'row',
  },
});

export default WeatherWidget;
