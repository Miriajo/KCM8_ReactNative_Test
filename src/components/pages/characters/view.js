import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './styles';

class Characters extends React.Component {
  render() {
    console.log('this.props: ', this.props);
    return (
      <SafeAreaView style={styles.container}>
        <Text>CHARACTERS</Text>
      </SafeAreaView>
    );
  }
}

export default Characters;
