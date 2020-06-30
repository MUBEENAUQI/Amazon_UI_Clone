import {Component} from 'react';
import * as React from 'react';

import {RadioButton} from 'react-native-paper';
import {Input, Content, Footer, CheckBox} from 'native-base';
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
    checked: 'first',
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
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              borderWidth: 2,
              borderColor: '#afafaf',
              marginHorizontal: 12,
              flexDirection: 'column',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
            <View style={{paddingHorizontal: 12, marginBottom: 10}}>
              <Input
                style={{
                  fontSize: 15,
                  borderTopWidth: 2,
                  borderColor: '#afafaf',
                  borderWidth: 1,
                  paddingLeft: 10,
                  height: 45,
                }}
                placeholderTextColor="#9c9c9c"
                placeholder="Name"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 10,

                flex: 1,
              }}>
              <Input
                style={{
                  fontSize: 15,
                  borderTopWidth: 2,
                  borderColor: '#afafaf',
                  borderWidth: 1,
                  paddingLeft: 10,
                  height: 45,
                  flex: 1,
                  marginLeft: 12,
                  marginRight: 10,
                  backgroundColor: '#e9ebee',
                }}
                placeholderTextColor="black"
                placeholder="IN +91"
              />
              <Input
                style={{
                  fontSize: 15,
                  borderTopWidth: 2,
                  borderColor: '#afafaf',
                  borderWidth: 1,
                  paddingLeft: 10,
                  height: 45,
                  flex: 3,
                  marginRight: 12,
                }}
                placeholderTextColor="#9c9c9c"
                placeholder="Mobile number"
              />
            </View>
            <View style={{paddingHorizontal: 12, marginBottom: 10}}>
              <Input
                style={{
                  fontSize: 15,
                  borderTopWidth: 2,
                  borderColor: '#afafaf',
                  borderWidth: 1,
                  paddingLeft: 10,
                  height: 45,
                }}
                placeholderTextColor="#9c9c9c"
                placeholder="Email (optional)"
              />
            </View>
            <View style={{paddingHorizontal: 12, marginBottom: 7}}>
              <Input
                style={{
                  fontSize: 15,
                  borderTopWidth: 2,
                  borderColor: '#afafaf',
                  borderWidth: 1,
                  paddingLeft: 10,
                  height: 45,
                }}
                placeholderTextColor="#9c9c9c"
                placeholder="Set password"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 12,
                marginBottom: 10,
              }}>
              <Text
                style={{color: '#5fa2be', fontStyle: 'italic', marginRight: 5}}>
                i
              </Text>
              <Text style={{flexWrap: 'wrap'}}>
                Passwords must be atleast 6 characters.
              </Text>
            </View>
            <View>
              <CheckBox checked={true} />
              <Body>
                <Text>show password</Text>
              </Body>
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
