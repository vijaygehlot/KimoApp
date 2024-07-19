import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Card from './Card';

interface CarouselProps {
  data: Array<{id: string; title: string; image: string; subtitle: string}>;
}

const Carousel: React.FC<CarouselProps> = ({data}) => {
  return (
    <View style={styles.carousel}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Card
            title={item.title}
            image={item.image}
            subtitle={item.subtitle}
          />
        )}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    paddingVertical: 20,
  },
});

export default Carousel;
