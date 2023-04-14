import React, {useState} from 'react';
import {StyleSheet, KeyboardAvoidingView} from 'react-native';

import Button from './Button';

function NavBar({
  setShowWeatherWidget,
  setShowForecast,
  showWeatherWidget,
  showForecast,
}) {
  const [isDisabled, setIsDisabled] = useState({
    weather: showWeatherWidget,
    forecast: showForecast,
  });

  function handleWeather() {
    setShowWeatherWidget(true);
    setShowForecast(false);
    setIsDisabled({weather: true, forecast: false});
  }

  function handleForecast() {
    setShowForecast(true);
    setShowWeatherWidget(false);
    setIsDisabled({weather: false, forecast: true});
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Button
        title="Current Weather"
        onPress={handleWeather}
        disabled={isDisabled.weather}
      />
      <Button
        title="Five-Day Three Hour Forecast"
        onPress={handleForecast}
        disabled={isDisabled.forecast}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default NavBar;
