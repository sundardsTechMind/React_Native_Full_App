import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SocialIcon, Image} from 'react-native-elements';

export default class LoginHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: 'https://techmind.s3.ap-south-1.amazonaws.com/11.jpg'}}
          style={{width: 500, height: 300}}
        />

        <Text style={styles.hello}> Hello.! </Text>
        <Text style={styles.intro}> Wecome back again let's login to get start learning.  </Text>

        <View style={styles.button}>
          <TouchableOpacity style={styles.logintouch}>
            <Text style={styles.logintext}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sigintouch}>
            <Text style={styles.sigintext}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text>Or via social media</Text>
        <View style={styles.social_icon}>
          <SocialIcon  type="google" />
          <SocialIcon type="facebook" />
          <SocialIcon type="twitter" />
          <SocialIcon type="youtube" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: 300,
  },
  hello: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  intro: {
    fontSize: 20,
    color: 'gray',
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    margin: 20,
    paddingVertical: 35,
  },
  logintouch: {
    backgroundColor: '#0d47a1',
    padding: 10,
    width: 150,
    borderRadius: 30,
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: '#0d47a1',
  },
  sigintouch: {
    backgroundColor: '#fff',
    padding: 10,
    width: 150,
    borderRadius: 30,
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: '#0d47a1',
  },
  logintext: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
  },
  sigintext: {
    textAlign: 'center',
    color: '#0d47a1',
    fontSize: 18,
  },
  social_icon: {
    flexDirection: 'row',
  },
});
