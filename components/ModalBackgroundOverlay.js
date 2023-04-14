import React from 'react';
import {StyleSheet, ImageBackground, View, Pressable} from 'react-native';

function ModalBackgroundOverlay({children, backgroundImage, style, onPress}) {
  const DynamicTag = backgroundImage ? ImageBackground : View;
  const externalStyles = style;

  return (
    <Pressable style={[styles.container, externalStyles]} onPress={onPress}>
      <DynamicTag
        src={backgroundImage ? backgroundImage : ''}
        resizeMode="cover"
        style={[styles.bgOverlay, externalStyles]}
        blurRadius={15}>
        {children}
      </DynamicTag>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },
  bgOverlay: {
    backgroundColor: '#000000BD',
    justifyContent: 'center',
  },
});

export default ModalBackgroundOverlay;
