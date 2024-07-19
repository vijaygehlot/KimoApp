import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

interface CardProps {
  title: string;
  subtitle: string;
  buttonText: string;
  avatarUri: string;
}

const TravelCard: React.FC<CardProps> = ({
  title,
  subtitle,
  buttonText,
  avatarUri,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
      <Image source={{uri: avatarUri}} style={styles.avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#001A1A',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginLeft: 10,
  },
  button: {
    width: 100,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#008080',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#008080',
    fontSize: 14,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
});

export default TravelCard;
