import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import CategoryCard from './CategoryCard';

interface ListComponentProps {
  data: Array<{title: string; img: string}>;
  type?: string;
}

const ListComponent: React.FC<ListComponentProps> = ({data, type}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <CategoryCard img={item.img} title={item.title} type={type} />
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 16,
  },
});

export default ListComponent;
