
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
//  import Login from '../screens/Login';
import MainLogin from '../screens/MainLogin';
 


const Onboarding = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>
          {item.title}
        </Text>
        <Image
          style={styles.introImageStyle}
          source={item.image} />
        <Text style={styles.introTextStyle}>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
           <MainLogin />
            
        
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
         
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 350,
    height: 350,
    borderRadius:300
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
    fontWeight: 'bold',
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Welcome back.Get start Software development journey with Us',
    title: 'Welcome To Tech Mind',
    image: {
      uri:
        'https://techmind.s3.ap-south-1.amazonaws.com/11.jpg',
    },
    backgroundColor: '#035afc',
  },
  {
    key: 's2',
    title: 'UI/UX Design',
    text: 'World Class Training',
    image: {
      uri:
        'https://techmind.s3.ap-south-1.amazonaws.com/22.jpg',
    },
    backgroundColor: '#FF33FE',
  },
  {
    key: 's3',
    title: 'Front-End Technology',
    text: 'Html,Css,Bootstrap,Angular,React,Vue',
    image: {
      uri:
        'https://techmind.s3.ap-south-1.amazonaws.com/33.jpg',
    },
    backgroundColor: '#a011ed',
  },
  {
    key: 's4',
    title: 'Backend Technology',
    text: 'Python,.Net,Java,Node.js,Ruby',
    image: {
      uri:
        'https://techmind.s3.ap-south-1.amazonaws.com/4.jpg',
    },
    backgroundColor: '#3395ff',
  },
  
  {
    key: 's6',
    title: 'Cloud Deployment',
    text: ' AWS,Azure,Google Cloud',
    image: {
      uri:
        'https://techmind.s3.ap-south-1.amazonaws.com/1.PNG',
    },
    backgroundColor: '#febe29',
  },
];