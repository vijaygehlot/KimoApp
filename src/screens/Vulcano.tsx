import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Vulcano = () => {
  return (
    <View style={styles.container}>
      <Text>Vulcano</Text>
    </View>
  );
};

export default Vulcano;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
