import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface CategoryCardProps {
  title: string;
  img?: string;
  type?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({title, img, type}) => {
  return (
    <View style={type === 'surfing' ? styles.cardOther : styles.card}>
      <Text
        style={
          (styles.cardText,
          type === 'surfing' ? styles.greenText : styles.cardText)
        }>
        {title}
      </Text>
      {type === 'surfing' ? (
        <Image source={{uri: img}} style={styles.image} />
      ) : (
        <Icon
          name="arrow-forward"
          size={24}
          color="#008080"
          style={styles.icon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardOther: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingLeft: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 16,
    fontFamily: 'monospace',
    fontWeight: '600',
    color: '#001A1A',
  },
  icon: {
    marginLeft: 'auto',
  },
  image: {
    height: 80,
    width: 120,
  },

  greenText: {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#008080',
    fontSize: 16,
  },
});

export default CategoryCard;
