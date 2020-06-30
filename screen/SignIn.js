import {Component} from 'react';
import * as React from 'react';

import {RadioButton} from 'react-native-paper';
import {Input, Content, Footer} from 'native-base';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Button,
  TouchableOpacityBase,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
export default class SignIn extends Component {
  state = {
    checked: 'second',
  };
  render() {
    const {checked} = this.state;
    return (
      <>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <View>
          <LinearGradient colors={['#fefefe', '#e1e1e1']}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 60,
              }}>
              <Image
                style={{height: 35, marginTop: 0, resizeMode: 'contain'}}
                source={require('../assets/homeLogo2.jpeg')}
              />
            </View>
          </LinearGradient>
        </View>
        <Content
          style={{
            backgroundColor: '#f6f6f6',

            paddingBottom: 10,
          }}>
          <View>
            <Text style={{fontSize: 22, padding: 10}}>Welcome</Text>
          </View>

          <View style={{paddingHorizontal: 8}}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#e0e0e0',
                width: 300,
                flexDirection: 'row',
                marginLeft: 3,
                alignItems: 'center',
                backgroundColor: '#f3f3f3',
                height: 50,
              }}>
              <View style={{marginLeft: 15}} />
              <RadioButton
                value="first"
                color="#e77600"
                uncheckedColor="#babbbb"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => this.props.navigation.navigate('createaccount')}
              />
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
                Create account.
              </Text>
              <Text style={{marginLeft: 3}}>New to amazon</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 3,
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#e0e0e0',
                width: 300,
                borderTopColor: 'white',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: -70,
                  alignItems: 'center',
                  paddingVertical: 5,
                }}>
                <RadioButton
                  value="second"
                  color="#e77600"
                  uncheckedColor="#babbbb"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    this.setState({checked: 'second'});
                  }}
                />
                <Text style={{fontWeight: 'bold'}}>Login.</Text>
                <Text style={{marginLeft: 3}}>Already a customer?</Text>
              </View>
              <View
                style={{
                  height: 45,
                  width: '90%',
                }}>
                <Input
                  style={{
                    fontSize: 15,
                    marginLeft: 5,
                    borderTopWidth: 1,
                    borderColor: '#afafaf',
                    borderWidth: 2,
                  }}
                  placeholderTextColor="#9c9c9c"
                  placeholder="Mobile number or Email"
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  height: 45,
                  width: '88%',
                  borderColor: '#b29242',
                  borderWidth: 1,

                  marginTop: 15,
                  MarginLeft: 15,
                  marginBottom: 20,
                }}>
                <LinearGradient colors={['#f6e0aa', '#dcb146']}>
                  <View
                    style={{
                      height: 33,
                      width: 260,
                      marginTop: 10,
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: '#b29242',
                    }}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Home')}>
                      <Text style={{fontSize: 18}}>Continue</Text>
                    </TouchableOpacity>
                  </View>
                </LinearGradient>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  paddingLeft: 20,
                  fontSize: 10,
                  marginBottom: 20,
                }}>
                <Text style={{marginRight: 3}}>
                  By continuing, you agree to Amazon's
                </Text>
                <Text style={{color: '#377fbb'}}>Conditions of Use</Text>
                <Text style={{marginLeft: 3}}>and</Text>
                <Text style={{color: '#377fbb', marginLeft: 3}}>
                  Privacy Notice.
                </Text>
              </View>
            </View>
          </View>
        </Content>
        <Footer
          style={{backgroundColor: '#f3f3f3', flexWrap: 'wrap', height: 65}}>
          <Text
            style={{
              color: '#377fbb',
              fontSize: 15,
              marginRight: 10,
              MarginLeft: 20,
            }}>
            Conditions of Use
          </Text>
          <Text style={{color: '#377fbb', fontSize: 15, marginRight: 10}}>
            Privacy Notice
          </Text>
          <Text style={{color: '#377fbb', fontSize: 15, marginRight: 10}}>
            Help
          </Text>
          <View
            style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesomeI
              name="copyright"
              size={8}
              color="#797979"
              style={{}}
            />
            <View style={{marginLeft: 5}} />
            <Text style={{color: '#797979', fontSize: 8, marginRight: 5}}>
              1996-2020, Amazon.com, inc. or affiliates
            </Text>
          </View>
        </Footer>
      </>
    );
  }
}
