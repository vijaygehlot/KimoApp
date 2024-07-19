import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

interface OverlayTextImageProps {
  text: string;
  imageUrl: string;
  textOpacity?: number;
}

const OverlayTextImage: React.FC<OverlayTextImageProps> = ({
  text,
  imageUrl,
  textOpacity = 0.7,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={[styles.text, {opacity: textOpacity}]}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
    position: 'relative',
    overflow: 'hidden',
    // borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 66,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: 'white',
    textAlign: 'center',
  },
});

export default OverlayTextImage;
