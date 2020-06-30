import React, {Component} from 'react';
import {styleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Left,
  Right,
  Icon,
  Item,
  Input,
  Form,
} from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export default class Settings extends Component {
  render() {
    return (
      <Container style={{backgroundColor: 'grey'}}>
        <Header
          style={{
            height: 60,
            backgroundColor: 'transparent',
            paddingLeft: 0,
            marginLeft: 0,
            right: 0,
          }}>
          <Left style={{flexDirection: 'row'}}>
            <Icon
              name="md-menu"
              style={{fontSize: 24, marginTop: 0, padding: 19, color: 'black'}}
            />
            <FAIcon
              name="amazon"
              style={{fontSize: 17, color: 'black', padding: 22}}
            />
          </Left>
          <Right>
            <Icon name="md-cart" />
          </Right>
        </Header>
        <LinearGradient
          colors={['#84d8e3', '#a5e6d0']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'transparent',
              position: 'absolute',
              left: 0,
              right: 0,
              top: 60,
              height: 55,
            }}>
            <View
              style={{
                justifyContent: 'center',
                backgroundColor: 'transparent',
                paddingLeft: 5,
              }}>
              <Item
                style={{
                  backgroundColor: 'white',
                  height: 38,
                  width: 344,
                  borderRadius: 5,
                  paddingHorizontal: 8,
                  borderColor: 'white',
                }}>
                <Icon name="search" style={{color: 'black', fontSize: 25}} />
                <Input
                  style={{color: 'grey', fontSize: 19}}
                  placeholder="Search"
                />
              </Item>
            </View>
          </View>
        </LinearGradient>
      </Container>
    );
  }
}
