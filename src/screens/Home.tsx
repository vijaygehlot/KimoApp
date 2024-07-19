import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Carousel from '../components/Carousel';
import ListComponent from '../components/ListComponent';
import OverlayTextImage from '../components/OverlayTextImage';
import TravelCard from '../components/TravelCard';

const data = [
  {title: 'Adventure', img: ''},
  {title: 'Culinary', img: ''},
  {title: 'Eco-tourism', img: ''},
  {title: 'Family', img: ''},
  {title: 'Sport', img: ''},
];

const data2 = [
  {
    id: '1',
    title: 'Surfing',
    image:
      'https://shotkit.com/wp-content/uploads/bb-plugin/cache/surf-photo-landscape-e4a0fbd14d1ea891ec323ff2cd6f00b9-zybravgx2q47.jpg',
    subtitle: 'Best Hawaiin islands for surfing.',
  },
  {
    id: '2',
    title: 'Hula',
    image: 'https://media.mybnbwebsite.com/11934/hula.jpg',
    subtitle: 'Try it yourself.',
  },
  {
    id: '3',
    title: 'Vulcanoes',
    image:
      'https://cdn.theatlantic.com/thumbor/30W194VeBZJYOQ4xI0LBjZBosn8=/1x239:5528x3348/1600x900/media/img/mt/2021/05/AP21139105270625/original.jpg',
    subtitle: 'Vulcanic conditions can change at any time.',
  },
  // Add more cards as needed
];

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.simpleView}>
          <OverlayTextImage
            text="Welcome to Hawaii"
            imageUrl="https://cdn.prod.website-files.com/61b694c59f46238057609302/639259d74677a6a63187b8cf_2.1%20COVER%20-%20Hawa%C3%AF.jpg"
            textOpacity={0.5}
          />
        </View>
        <Text style={styles.highlightText}>Highlights</Text>
        <Carousel data={data2} />
        <Text style={styles.highlightText}>Categories</Text>
        <ListComponent data={data} />
        <Text style={styles.highlightText}>Travel Guide</Text>
        <TravelCard
          title="Hadwin Malone"
          subtitle="Guide since 2012"
          buttonText="Contact"
          avatarUri="https://upload.wikimedia.org/wikipedia/commons/2/23/Photo_portrait_PP.jpg"
        />
      </ScrollView>
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => {
          /* Handle button press */
        }}>
        <Text style={styles.buttonText}>Book a trip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 80, // Ensure there's space for the bottom button
  },
  simpleView: {
    backgroundColor: '#f8f8f8',
  },
  highlightText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: '2.5%',
    fontFamily: 'monospace bold',
    color: '#000',
  },
  bottomButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#008080',
    padding: 10,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
});

export default Home;
