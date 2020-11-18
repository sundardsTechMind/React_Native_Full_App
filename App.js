
import * as React from 'react';
import { NavigationContainer,useNavigation  } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 
import Onboarding from './src/screens/Onboarding';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import MainLogin from './src/screens/MainLogin';

const AuthStack = createStackNavigator();

export default  App = ()=> {
  return (
    <NavigationContainer>
      <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen name="Onboarding" component={Onboarding} />
        <AuthStack.Screen name="MainLogin" component={MainLogin} />
        <AuthStack.Screen name="Login" component={Login} />   
        <AuthStack.Screen name="Register" component={Register} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

