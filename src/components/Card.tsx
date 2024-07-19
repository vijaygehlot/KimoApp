import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
}

const Card: React.FC<CardProps> = ({title, subtitle, image}) => {
  console.log('subtitle', subtitle);

  return (
    <View style={styles.card}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>{subtitle || 'subtitle'}</Text>
          <View style={styles.iconContainer}>
            <Icon name="arrow-forward" size={20} color="#008080" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 250,
    height: 300,
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 10,
    backgroundColor: '#fff',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: '70%',
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#008080',
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'left',
    fontFamily: 'monospace',
    flex: 1,
    color: '#001A1A',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: '#00808029',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;
