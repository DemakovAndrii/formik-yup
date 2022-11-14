import React, {FC} from 'react';
import {Formik} from 'formik';
import {Text, StyleSheet, Button, ScrollView, SafeAreaView} from 'react-native';
import Input from './../Input/Input';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required(''),
  password: Yup.string().min(8, 'Too Short!').required(''),
  name: Yup.string()
    .matches(/^[a-zA-Z_-]{0,15}$/, 'Invalid format')
    .min(5, 'Too Short!')
    .max(15, 'Too Long!')
    .required(''),
  tel: Yup.string()
    .min(2, 'Too Short!')
    .required('')
    .matches(/^\+[1-9]\d{1,14}$/, 'Example +16308520397'),
});

const Form: FC = () => {
  return (
    <Formik
      initialValues={{email: '', password: '', name: '', tel: ''}}
      onSubmit={values => console.log(values)}
      validationSchema={SignupSchema}>
      {({handleChange, handleSubmit, values, errors}) => (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Text style={styles.text}>Login Form</Text>
            <Input
              title="Email address"
              name="email"
              handleChange={handleChange}
              value={values.email}
              error={errors.email}
            />
            <Input
              title="Password"
              name="password"
              handleChange={handleChange}
              value={values.password}
              error={errors.password}
            />
            <Input
              title="Name"
              name="name"
              handleChange={handleChange}
              value={values.name}
              error={errors.name}
            />
            <Input
              title="Telephone"
              name="tel"
              handleChange={handleChange}
              value={values.tel}
              error={errors.tel}
            />
            <Button onPress={handleSubmit} title="Login" />
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    paddingBottom: 40,
  },
});

export default Form;
