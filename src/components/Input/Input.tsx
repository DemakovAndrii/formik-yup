import React, {FC} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

type InputProps = {
  title: string;
  name: string;
  handleChange: any;
  value: string;
  error?: string;
};

const Input: FC<InputProps> = ({name, handleChange, title, value, error}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleChange(name)}
      />
      <Text>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  },
  text: {
    fontWeight: '400',
    fontSize: 24,
    color: 'white',
  },
  input: {
    display: 'flex',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    fontSize: 24,
  },
});

export default Input;
