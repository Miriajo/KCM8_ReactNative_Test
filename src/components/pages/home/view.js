import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  View,
  Text,
} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import * as api from '../../../api';
import _ from 'lodash';
import {HouseCell} from '../../molecules';

class Home extends Component {
  state = {
    houses: [],
  };

  componentDidMount() {
    this._loadHousesList();
  }

  _loadHousesList = async () => {
    try {
      const getHousesRes = await api.getHouses();
      const houses = _.get(getHousesRes, 'data.records', []);
      this.setState({houses: houses});
    } catch (e) {
      console.log('getHouses err: ', e);
    }
  };

  _renderItem = ({item}) => (
    <HouseCell
      house={item}
      onHousePress={house => console.log('house: ', house)}
    />
  );

  render() {
    const {houses} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={houses}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => `house-${item.id}`}
          numColumns={2}
        />
      </SafeAreaView>
    );
  }
}

export default Home;
