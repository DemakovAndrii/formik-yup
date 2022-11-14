import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Form from './src/components/Form/Form';

const App = () => {
  return (
    <View style={{height: '100%', backgroundColor: 'black'}}>
      <Form  />
    </View>
  );
};

export default App;
