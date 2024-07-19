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
  {
    title: 'Maui',
    img: 'https://afar.brightspotcdn.com/dims4/default/6753a32/2147483647/strip/true/crop/3000x1592+0+164/resize/1440x764!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F76%2F04%2Fae335e0b47aabd529fbb6914da24%2Ftravelguides-maui-danitadelimont-shutterstock.jpg',
  },
  {
    title: 'Kauai',
    img: 'https://imageio.forbes.com/specials-images/imageserve/617fede0748f4f48d008a9ff/View-on-Napali-Coast-on-Kauai-island-on-Hawaii/960x0.jpg?format=jpg&width=960',
  },
  {
    title: 'Honolulu',
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/0e/9c/dc/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_0fe867773fc0bc5ac49d',
  },
];


const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.simpleView}>
          <OverlayTextImage
            text="Surfing"
            imageUrl="https://shotkit.com/wp-content/uploads/bb-plugin/cache/surf-photo-landscape-e4a0fbd14d1ea891ec323ff2cd6f00b9-zybravgx2q47.jpg"
            textOpacity={0.5}
          />
          <Text style={styles.surfingText}>
            Hawaii is the capital of modern surfing. This group of Pacific
            islands gets swell from all directions, so there are plenty of
            pristine surf spots for all.
          </Text>
        </View>

        <Text style={styles.highlightText}>Top Sports</Text>
        <ListComponent data={data} type="surfing" />
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
  surfingText: {
    padding: 10,
    color: '#001A1A',
    fontFamily: 'monospace',
    lineHeight: 20,
  },
});

export default Home;
