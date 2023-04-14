import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function WeatherDetail({label, data, uom, aqiColor, style, colorScheme}) {
  const externalStyles = style;

  return (
    <View style={[styles.container, externalStyles?.container]}>
      <Text style={[styles.text, externalStyles?.label]}>{label}</Text>
      <Text style={[styles.text, externalStyles?.text]}>
        {data ? data : '--'}
        {uom ? uom : ''}
        {aqiColor ? ' ' : ''}
        {aqiColor ? (
          <View style={[styles.aqiBubble, {backgroundColor: aqiColor}]} />
        ) : null}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    width: '100%',
  },
  aqiBubble: {
    height: 12,
    width: 12,
    borderRadius: 7,
  },
  text: {
    fontSize: 15,
  },
});

export default WeatherDetail;
