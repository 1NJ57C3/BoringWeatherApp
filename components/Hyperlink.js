import React from 'react';
import {StyleSheet, Linking, Alert, Text} from 'react-native';

function Hyperlink({URL, displayText}) {
  async function handleLink(url) {
    try {
      await Linking.canOpenURL(url);
      await Linking.openURL(url);
    } catch (e) {
      Alert.alert(e.message);
    }
  }

  return (
    <Text style={styles.text} onPress={() => handleLink(URL)}>
      {displayText}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    textDecorationStyle: 'solid',
    textDecorationColor: 'grey',
    textDecorationLine: 'underline',
  },
});

export default Hyperlink;
