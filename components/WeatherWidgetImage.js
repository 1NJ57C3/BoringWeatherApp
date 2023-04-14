import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import WeatherImage from './WeatherImage';

function WeatherWidgetImage({weatherData, style}) {
  const externalStyles = style;
  const weatherIcon = weatherData?.weather[0]?.icon;
  const weatherDesc = weatherData?.weather[0]?.description;

  return (
    <View style={[styles.root, externalStyles]}>
      <WeatherImage src={IMG_URL} iconCode={weatherIcon} decorated={true} />
      <Text style={styles.caption}>
        {weatherData ? weatherDesc : 'Loading...'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  caption: {
    textTransform: 'capitalize',
    fontSize: 18,
    marginTop: 10,
  },
});

export default WeatherWidgetImage;
